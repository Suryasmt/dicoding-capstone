import React, { useEffect, useState } from "react";
import heroAuth from "../../assets/login-image-vektor.png";
import logoImage from "../../assets/logo.png";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Link } from "react-router-dom";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [user] = useAuthState(auth)

  const navigate = useNavigate();

  const handleEmailPasswordLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setErrorSignIn(true);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((err) => {
        console.info(err);
      });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });
  
  return (
    <div className="container-login">
      <div className="back-to-home">
        <Link to="/">
          <AiOutlineHome className="icon-home" />
          Kembali ke Home
        </Link>
      </div>

      <div className="form-login">
        <div className="item-logo">
          <img src={logoImage} alt="" />
        </div>
        <h1 className="login-title">Masuk</h1>
        <form onSubmit={handleEmailPasswordLogin}>
          <div className="form-group">
            <label className="mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukan Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Masukan Password"
            />
          </div>
          {errorSignIn ? (
            <p style={{ color: "red", margin: "auto" }}>
              Email atau password salah
            </p>
          ) : (
            " "
          )}
          <button className="btn-login-email">Masuk</button>
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
            className="d-flex align-items-center justify-content-center gap-4 login-google shadow mb-3"
          >
            <FcGoogle className="icon-google" />
            <p>Masuk dengan Google</p>
          </div>
        </form>

        <p className="to-register">
          Belum punya akun? Silahkan{"   "}
          <Link to="/register">Daftar</Link>
        </p>
      </div>

      <div className="hero-login">
        <img src={heroAuth} alt="hero-login" />
      </div>
    </div>
  );
};

export default LoginPage;
