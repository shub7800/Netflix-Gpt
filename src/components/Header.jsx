import React from "react";
import logo from "../assets/logo.png";
import signIn from "../assets/signlogo.jpg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div>
      <div className="absolute w-screen flex justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
        <img className="w-45" src={logo} alt="Logo" />
        {user && 
        <div className="flex items-center gap-2 p-2 cursor-pointer">
          <img className="w-6 h-6" src={user?.photoURL} alt="Sign out" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign out
          </button>
        </div>} 
      </div>
    </div>
  );
};

export default Header;
