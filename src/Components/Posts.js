import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
export const Posts = () => {
  return (
    <div>
      <Post />
    </div>
  );
};

const Post = () => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            width={40}
            height={40}
            alt=""
            src="./saheel.jpg"
          />
          <div>
            <p>Saheel</p>
            <p className="text-xs text-gray-400">9th Feb 2022</p>
          </div>
        </div>
        <p className="pt-4">Lets Meet Soon!</p>
      </div>
      <div className="relative h-56 md:96 bg-white">
        <img src="" style={{ objectFit: "cover" }} />
      </div>
      {/* Footer section of post */}
      <div className="flex justify-between items-center rounded-b-2xl shadow-md bg-white text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base ">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base ">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base ">Share</p>
        </div>
      </div>
    </div>
  );
};
