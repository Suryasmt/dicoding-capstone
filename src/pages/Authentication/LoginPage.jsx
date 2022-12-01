import React from "react";

const LoginPage = () => {
  return (
    <main>
      <div className='container-login'>
        <div>
            <div>
                <h1>Kembali ke Home</h1>
            </div>
            <div className="card-login">
                <img src="" alt="" />
                <h1>Masuk</h1>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                    </div>
                    <button>Masuk</button>
                    <button>Masuk dengan GOOGLE</button>
                </form>
                <p>Belum punya akun? Daftar</p>
            </div>
        </div>
        <div>
            <img src="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
