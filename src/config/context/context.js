import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  //state
  const [user, setUser] = useState();

  
  //clc
  useEffect (() =>{
    const isLogin = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
  });
  return () => {
      isLogin();
  }
  },[])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
