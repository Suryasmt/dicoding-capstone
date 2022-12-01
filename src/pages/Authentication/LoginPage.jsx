import React from "react";
import loginImageVektor from "../../assets/login-image-vektor.png";
import logoImage from "../../assets/logo.png";

const LoginPage = () => {
  return (
    <div className="container-login">
      <div className="login-form">
        <div className="back-to-login">
          <h1>Kembali ke Home</h1>
        </div>
        <div className="form-card">
          <div className="item-logo">
            <img src={logoImage} alt="" />
          </div>
          <form>
            <h1 className="login-title">Masuk</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" />
              <p>forget password</p>
            </div>
            <button>Masuk</button>
            <button>Masuk dengan GOOGLE</button>
          </form>
          <p>Belum punya akun? Daftar</p>
        </div>
      </div>

      <div className="login-image">
        <img src={loginImageVektor} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
