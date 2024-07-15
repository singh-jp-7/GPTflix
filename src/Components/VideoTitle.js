import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-16 py-64 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className=" font-bold text-4xl py-2">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="flex my-4 ">
        <button className="bg-white text-black font-bold px-6 py-2 rounded-sm mx-2 hover:bg-opacity-80">
          &#9658; Play
        </button>
        <button className="bg-white text-black font-bold px-6 py-2 rounded-sm mx-2 bg-opacity-50">
          &#9432; &nbsp; More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
