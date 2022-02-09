import React from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
export const InputBox = () => {
  const sendPost = (e) => {
    e.preventDefault();
    alert("Post Sent!");
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="rounded-full"
          src={"https://links.papareact.com/4u4"}
          width={40}
          height={40}
          layout="fixed"
          style={{ height: "40px" }}
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind Saheel?`}
          />
          <button hidden onClick={(e) => sendPost(e)}>
            {" "}
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};
