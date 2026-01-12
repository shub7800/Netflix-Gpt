import React, { useRef, useState } from "react";
import Header from "./Header";
import bgimg from "../assets/bg.jpg";
import { checkValidDate } from "../utils/validate.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name= useRef(null);

  const handleButtonClick = () => {
  const message = checkValidDate({
    email: email.current.value,
    password: password.current.value,
    name: isSignInForm ? null : name.current.value,
  });

  setErrorMessage(message);

  if(message) return;
  
  //sign / sign up logic
  
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
