import React from "react";
import Netlix_Logo from "../Images/Netflix_Logo_PMS.png";
import Netlix_avatar from "../Images/Netflix_avatar.png";
import { useSelector } from "react-redux";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={Netlix_Logo}
        alt="LOGO"
      ></img>
      {user &&
      <div>
      <img
        className="hidden md:block w-8 h-8 m-4"
        src={Netlix_avatar}
        alt="Avatar"
      ></img>
      <button onClick={signOutUser}>Sign Out: {user?.displayName}</button>
      </div>}
    </div>
  );
};

export default Header;
