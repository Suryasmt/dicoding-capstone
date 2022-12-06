import React, { useState } from "react";
import heroAuth from "../../assets/login-image-vektor.png";
import logoImage from "../../assets/logo.png";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Link } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const RegisterPage = () => {
  const [alredyEmail, setAlredyEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error(err);
        setAlredyEmail(true);
      });
  };

  // let user = JSON.parse(localStorage.getItem("user"));
  // let userRef= doc(db, "chat", user.username);
  // setDoc(userRef, {
  //   user:user,
  // })
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        console.info(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));


        navigate("/");
      })
      .catch((err) => {
        console.info(err);
      });
  };

  return (
    <div className="container-register">
      <div className="register-back-to-home">
        <Link to="/">
          <AiOutlineHome className="icon-home" />
          Kembali ke Home
        </Link>
      </div>

      <div className="hero-register">
        <img src={heroAuth} alt="hero-register" />
      </div>

      <div className="form-register">
        <div className="item-logo">
          <img src={logoImage} alt="" />
        </div>
        <h1 className="register-title">Daftar</h1>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="mb-2" htmlFor="email">
              Email{" "}
              {alredyEmail ? (
                <p style={{ color: "red" }}>*Email sudah digunakan</p>
              ) : (
                ""
              )}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Masukan Email"
            />
          </div>
          <div className="form-group">
            <label className="mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Masukan Password"
            />
          </div>
          <button className="btn-register-email">Daftar</button>
          <div className="d-flex px-0">
            <div className="col-5 px-0">
              <hr />
            </div>
            <div className="col-2 text-center">
              <div className="mt-1">atau</div>
            </div>
            <div className="col-5 px-0">
              <hr />
            </div>
          </div>
          <div
            onClick={handleGoogleLogin}
            className="login-google d-flex align-items-center justify-content-center gap-4 shadow mb-3"
          >
            <FcGoogle className="icon-google" />
            <p>Masuk dengan Google</p>
          </div>
        </form>

        <p className="to-register">
          Sudah punya akun? Silahkan{"   "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
