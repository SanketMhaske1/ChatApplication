import React from "react";
import logo from "../assets/logo.png";

function AuthLayOut(props) {
  return (
    <>
      <header className="flex justify-center items-center py-3 h-20 shadow-md bg-white">
        <img src={logo} alt="logo" height={60} width={180}></img>
      </header>
      {props.children}
    </>
  );
}

export default AuthLayOut;
