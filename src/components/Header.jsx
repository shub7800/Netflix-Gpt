import React, { useEffect } from "react";
import logo from "../assets/logo.png";
// import signIn from "../assets/signlogo.jpg";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch(() => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component is unmount 
    return ()=> unsubscribe();
  }, []);

  return (
    <div>
      <div className="absolute w-screen flex justify-between px-8 py-4 bg-gradient-to-b from-black to-transparent z-10">
        <img className="w-32" src={logo} alt="Logo" />
        {user && (
          <div className="flex items-center gap-2 p-2 cursor-pointer">
            <img className="w-6 h-6" src={user?.photoURL} alt="Sign out" />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
