import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issigninform, setissigninform] = useState(true);
  const togglesignForm = () => {
    setissigninform(!issigninform);
  };
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="back-logo"
      />
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {issigninform ? "Sign In" : "Sign UP"}
        </h1>
        {!issigninform && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="E-mail address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {issigninform ? "Sign In" : "Sign UP"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesignForm}>
          {issigninform
            ? "New to Netflix ? Please Sign Up"
            : "Already registered ? Sign In "}
        </p>
      </form>
    </div>
  );
};

export default Login;
