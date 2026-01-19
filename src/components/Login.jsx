import React, { useRef, useState } from "react";
import Header from "./Header";
import bgimg from "../assets/bg.jpg";
import { checkValidDate } from "../utils/validate.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";

import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/constants.js";

const Login = () => {
  
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidDate({
      email: email.current.value,
      password: password.current.value,
      name: isSignInForm ? null : name.current.value,
    });

    setErrorMessage(message);

    if (message) return;

    //sign / sign up logic
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div>
        <Header />
        <img className="absolute w-full h-full object-cover" src={bgimg} alt="" />
      </div>
      <form
        className="absolute w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 p-6 sm:p-8 md:p-10 my-20 sm:my-24 md:my-28 lg:my-36 left-0 right-0 mx-auto bg-black/70 text-white rounded-lg"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl py-3 sm:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="bg-gray-700 p-3 sm:p-4 my-2 w-full rounded text-sm sm:text-base"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-700 p-3 sm:p-4 my-2 w-full rounded text-sm sm:text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="bg-gray-700 p-3 sm:p-4 my-2 w-full rounded text-sm sm:text-base"
        />
        <p className="text-red-500 font-bold text-base sm:text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 sm:p-4 my-3 sm:my-4 bg-red-600 w-full rounded text-sm sm:text-base font-medium"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <button className="text-white">{isSignInForm? "Sign up now" : "Sign In now"}</button> */}
        <p className="py-3 sm:py-4 cursor-pointer text-sm sm:text-base" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to netflix? Sign up now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;