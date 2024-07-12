import { useState, useRef } from "react";
import { BG_URL } from "../Utils/Constants";
import Netlix_Logo from "../Images/Netflix_Logo_PMS.png";
import { checkValidData } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [errormessage, setErrorMessage] = useState(null);

  const handleButtonclick = () => {
    const nameValue = name?.current?.value;
    const emailValue = email?.current?.value;
    const passwordValue = password?.current?.value;
    const message = isSignUp ? checkValidData(nameValue, emailValue, passwordValue) : checkValidData(false, emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  return (
    <div className="relative flex">
      <img
        className=" absolute w-36 bg-gradient-to-bl"
        src={Netlix_Logo}
        alt="LOGO"
      ></img>
      <form
        className="flex flex-col absolute bg-black opacity-85 w-3/12 my-44 mx-[550px] p-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <span className=" text-white font-bold text-left text-3xl py-4">
          {isSignUp ? "Sign Up" : "Log In"}
        </span>
        {isSignUp && (
          <input
            className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
            type="text"
            placeholder="Name"
            ref={name}
          ></input>
        )}
        <input
          className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
          type="text"
          placeholder="Email or Phone"
          ref={email}
        ></input>
        <input
          className="bg-blue opacity-45 p-3 border-gray-200 rounded-lg my-1"
          type="password"
          placeholder="Password"
          ref={password}
        ></input>
        {errormessage && (
          <p className="text-red-500 font-bold">{errormessage}</p>
        )}
        <button
          className=" bg-red-700 text-white text-lg py-2 text-center border-black rounded-lg bg-opacity-100 my-1 font-bold"
          onClick={handleButtonclick}
        >
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
