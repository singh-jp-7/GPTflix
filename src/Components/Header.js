import React, { useEffect } from "react";
import Netlix_Logo from "../Images/Netflix_Logo_PMS.png";
import Netlix_avatar from "../Images/Netflix_avatar.png";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // CleanUp after component Unmount 
    return () => unsubscribe();
  }, []);
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
      <button className="text-white" onClick={signOutUser}>Sign Out: {user?.displayName}</button>
      </div>}
    </div>
  );
};

export default Header;
