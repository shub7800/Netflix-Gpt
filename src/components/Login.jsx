import React, { useState } from "react";
import Header from "./Header";
import bgimg from "../assets/bg.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
         {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name "
            className="bg-gray-700 p-4 my-2 w-full rounded"
          />
        )} 
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-4 my-2 w-full rounded"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-gray-700 p-4 my-2 w-full rounded"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded">
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
