import React from "react";
import heroAuth from "../../assets/login-image-vektor.png";
import logoImage from "../../assets/logo.png";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
        <form>
          <div className="form-group">
            <label className="mb-2" htmlFor="email">Email</label>
            <input type="text" placeholder="Masukan Email" />
          </div>
          <div className="form-group">
            <label className="mb-2" htmlFor="password">Password</label>
            <input type="password" placeholder="Masukan Password" />
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
          <div className="login-google d-flex align-items-center justify-content-center gap-4 shadow mb-3">
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
