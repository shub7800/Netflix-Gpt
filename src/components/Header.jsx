import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/GptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle Gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-4 md:px-8 py-3 md:py-4 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex justify-between items-center">
      <img className="w-24 md:w-32 lg:w-36" src={logo} alt="Logo" />
      {user && (
        <div className="flex items-center gap-2 md:gap-3">
          {showGptSearch && (
            <select className="bg-white p-2 m-2 " onChange={handleLangChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-red-500/60 text-white font-bold py-2 px-4 md:py-2.5 md:px-8 lg:py-3 lg:px-6 rounded-lg hover:bg-red-500/40 active:scale-95 transition-all duration-200 flex items-center gap-2 text-sm md:text-base lg:text-lg shadow-xl backdrop-blur-sm hover:shadow-2xl"
            onClick={handleGptSearchClick}
          >
            {showGptSearch?"HomePage" : "GPT Search"}
          </button>

          <img
            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full ring-2 ring-white/30 hover:ring-white/50 transition-all duration-200 object-cover"
            src={user?.photoURL}
            alt="User"
          />

          <button
            onClick={handleSignOut}
            className="font-semibold text-white text-sm md:text-base lg:text-lg hover:underline hover:text-red-400 transition-colors duration-200"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
