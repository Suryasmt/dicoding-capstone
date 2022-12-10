import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineUser } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import userImg from "../../../assets/profile-user.png";
import { auth } from "../../../config/firebase";

export default function ButtonSigIn({
  setMobile,
  setDropdownUser,
  dropdownUser,
}) {
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleDropdownUser = () => {
    setDropdownUser(!dropdownUser);
    setMobile(false);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setDropdownUser(false);
      })
      .catch((err) => {
        console.error(err);
        setDropdownUser(false);
      });
  };

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  },[user]);

  return (
    <>
      {user ? (
        <div
          onClick={handleDropdownUser}
          className={
            dropdownUser
              ? "frame-icon-user icon-user-active"
              : "frame-icon-user"
          }
        >
          <AiOutlineUser className="icon-user_ai" />
        </div>
      ) : (
        <button onClick={() => navigate("/login")} className="btn-login">
          {loading ? "Loading..." : "Masuk" }
        </button>
      )}

      <div
        className={
          dropdownUser ? "user-dropdown user-dropdown-active" : "user-dropdown"
        }
      >
        <div className="dropdown-item_user">
          <div className="photo-user">
            <img
              src={user?.photoURL === null ? userImg : user?.photoURL}
              alt="userphoto"
            />
          </div>
          <p>{user?.email}</p>
        </div>

        <div>
          <hr />
        </div>

        <ul className="dropdown-item_list">
          <li>
            <RiCustomerService2Line className="list-user-icon" /> Chat Admin
          </li>
          <li onClick={handleLogout}>
            <BiLogOut className="list-user-icon" /> Keluar
          </li>
        </ul>
      </div>
    </>
  );
}
