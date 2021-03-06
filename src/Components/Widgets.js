import React from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
const contacts = [
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
  {
    src: "https://links.papareact.com/4u4",
    name: "saheel",
  },
];

const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.src} src={contact.src} name={contact.name} />
        );
      })}
    </div>
  );
};

const Contact = ({ src, name }) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-grey-200 cursor-pointer p-2 rounded-xl">
      <img
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full  animate-bounce"></div>
    </div>
  );
};

export default Widgets;
