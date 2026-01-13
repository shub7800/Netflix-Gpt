import React, { useRef, useState } from "react";
import Header from "./Header";
import bgimg from "../assets/bg.jpg";
import { checkValidDate } from "../utils/validate.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

const Login = () => {
  const navigate = useNavigate();
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
            photoURL: "https://avatars.githubusercontent.com/u/114250610?v=4",
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
              navigate("/browse");
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
          console.log(user);
          navigate("/browse");

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
        <img className="absolute" src={bgimg} alt="" />
      </div>
      <form
        className="absolute w-1/4 p-12 my-36 left-0 right-0 mx-auto bg-black/70 text-white rounded-lg
"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="bg-gray-700 p-4 my-2 w-full rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-700 p-4 my-2 w-full rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="bg-gray-700 p-4 my-2 w-full rounded"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* <button className="text-white">{isSignInForm? "Sign up now" : "Sign In now"}</button> */}
        <p className="py-4 cursor-pointer " onClick={toggleSignForm}>
          {isSignInForm
            ? "New to netflix? Sign up now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
