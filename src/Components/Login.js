import { useState, useEffect } from "react";
import { BG_URL } from "../Utils/Constants";
import Netlix_Logo from "../Images/Netflix_Logo_PMS.png";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="relative flex">
      <img
        className=" absolute w-36 bg-gradient-to-bl"
        src={Netlix_Logo}
        alt="LOGO"
      ></img>
      <form className="flex flex-col absolute bg-black opacity-85 w-3/12 my-44 mx-[550px] p-12 rounded-lg">
        <span className=" text-white font-bold text-left text-3xl py-4">
          {isSignUp ? "Sign Up" : "Log In"}
        </span>
        {isSignUp && (
          <input
            className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
            type="text"
            placeholder="Name"
          ></input>
        )}
        <input
          className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
          type="text"
          placeholder="Email or Phone"
        ></input>
        <input
          className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
          type="password"
          placeholder="Password"
        ></input>
        <button className=" bg-red-700 text-white text-lg py-2 text-center border-black rounded-lg bg-opacity-100 my-1 font-bold">
          {isSignUp ? "Sign Up" : "Log In"}
        </button>
        <span className="text-white flex flex-row items-center my-2 m-x-auto p-2">
          {isSignUp ? " Already a User? " : "New to GPTFlix?"}
          <h2
            className=" cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            &nbsp;{isSignUp ? "Log In" : "Sign Up"}
          </h2>
        </span>
      </form>
      <img src={BG_URL} alt="BG URL"></img>
    </div>
  );
};

export default Login;
