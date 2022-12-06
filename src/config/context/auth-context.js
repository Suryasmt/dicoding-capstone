import { createContext, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export const dataBaseContext = createContext();

export default function DataBaseProvider({ childern }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // membaca data dari collection chat
  const getUserCollection = async () => {
    let userCol = []
    let userColRef = await collection(db, "user");
    let result = await getDocs(userColRef);

    result.forEach((e) => {
      userCol.push(e.data())
    })
    return userCol
  };

// trigger ketika ada update di chat collection
  const userTrigger = () => {
    let userRef = collection(db, "chat")

    onSnapshot(userRef, (rec) =>{

      getUserCollection().then(res => {
        setUser(res)
      })
    })
  }

   //   Handle message
   const handleMessage = (e) => {
    e.preventDefault();
    let getMessage = e.target.message.value;

    if (!getMessage) {
      return;
    }

    let user = JSON.parse(localStorage.getItem("boring_chat_user"));
    e.target.message.value = "";


    let userRef = doc(db, "user", Date.now() + user.username);
    setDoc(userRef, {
      user: user,
    }).then((res) => {
      console.info(res);
    });

  };

}
