import React, { useEffect, useState } from "react";
import { IoMdSend } from "@react-icons/all-files/io/IoMdSend";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  doc,
  setDoc,
  onSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { auth, dbStore } from "../../config/firebase";
import userImg from "../../assets/profile-user.png";
import moment from "moment/moment";
import ButtonSigIn from "../../components/Navigation/nav-properti/ButtonSigIn";
import { useNavigate } from "react-router-dom";

export default function RoomChat() {
  const [isMobile] = useState(false);
  const [dropdownUser, setDropdownUser] = useState(false);
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [message, setMessage] = useState([
    {
      id: 123123,
      message: "Ini user Lain",
      createdAt: Date.now(),
      user: {
        email: "ulil",
        photo: null,
      },
    },
  ]);

  const handleMessage = (e) => {
    e.preventDefault();
    let getMessage = e.target.message.value;

    if (!getMessage) {
      return;
    }

    const getIdDoc = Date.now().toString();
    let messageRef = doc(dbStore, "message", getIdDoc);
    e.target.message.value = "";

    setDoc(messageRef, {
      id: getIdDoc,
      message: getMessage,
      createdAt: Date.now(),
      user: {
        id: user.uid,
        email: user.email,
        photo: user.photoURL,
      },
    })
      .then((res) => {})
      .catch((err) => {
        console.error(err);
      });
  };

  // membaca data dari collection chat
  const getMessageCollection = async () => {
    let arrayCollectionMessage = [];
    let messageCollectRef = await collection(dbStore, "message");
    let result = await getDocs(messageCollectRef);

    result.forEach((e) => {
      arrayCollectionMessage.push(e.data());
    });
    return arrayCollectionMessage;
  };

  // component did mount
  useEffect(() => {
    const messageTrigger = () => {
      let messageRef = collection(dbStore, "message");
  
      onSnapshot(messageRef, (newRec) => {
        getMessageCollection()
        .then((res) => {
          setMessage(res);
        }).catch((err)=>{
          console.error(err)
        })
      });
    };

    getMessageCollection()
    .then((res) => {
      setMessage(res);
    });


    // component did update
    return messageTrigger();
  
  },[]);

  if (user === null) {
    return (navigate('/login'));
  }

  return (
    <>
      <div className="room-chat">
        <div className="header-room-chat">
          <IoIosArrowBack className="icon-back-message" onClick={(e) => navigate('/')}/>
          <h1>LIVE CHAT</h1>
          <ButtonSigIn setDropdownUser={setDropdownUser} dropdownUser={dropdownUser} isMobile={isMobile}/>
        </div>
        <div className="container-buble-message">
          {message.map((data) => {
            return (
              <div
                key={data.id}
                className={
                  user?.email === data.user.email
                    ? "user-buble-message"
                    : "not-user-buble-message user-buble-message"
                }
              >
                <div className="user-icon">
                  <img
                    src={data?.user.photo !== null ? data?.user.photo : userImg}
                    alt="user-icon"
                  />
                </div>

                <div className="box-info_user">
                  <div className={user?.email === data.user.email ? "user-title" : "not-user-title user-title"}>
                    <small>{data.user.email}</small>
                  </div>
                  <div className={user?.email === data.user.email ? "user-message" : "not-user-message user-message"}>
                    <small>{data.message}</small>
                    <div className={user?.email === data.user.email ? "user-createdAt" : "not-user-createdAt user-createdAt"}>
                      <small>
                        {moment(data.createdAt).format(
                          "dddd hh:mm | DD/MM/YYYY"
                        )}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleMessage} className="form-message">
          <input type="text" id="message" placeholder="Tulis Pesan..." />
          <button type="submit">
            <IoMdSend className="icon-btn-message" />
          </button>
        </form>
      </div>
    </>
  );
}
