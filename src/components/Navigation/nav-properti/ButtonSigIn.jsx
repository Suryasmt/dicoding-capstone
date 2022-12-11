import { BiLogOut } from "@react-icons/all-files/bi/BiLogOut";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import userImg from "../../../assets/profile-user.png";
import { auth } from "../../../config/firebase";
import iconPremium from "../../../assets/premium.jpeg";
import { useEffect } from "react";

export default function ButtonSigIn({
  toggleValue,
  setMobile,
  setDropdownUser,
  dropdownUser,
}) {
  const [user] = useAuthState(auth);
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
    if (toggleValue === false) {
      setDropdownUser(toggleValue);
    }
  }, [toggleValue, setDropdownUser]);

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
          Masuk
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
          <li
            onClick={() => {
              navigate("/consultation");
              setDropdownUser(false);
            }}
          >
            <img className="list-user-icon" src={iconPremium} alt="" />{" "}
            Konsultasi
          </li>
          <li onClick={handleLogout}>
            <BiLogOut className="list-user-icon" /> Keluar
          </li>
        </ul>
      </div>
    </>
  );
}
