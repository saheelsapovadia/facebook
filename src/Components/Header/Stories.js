import React from "react";

const stories = [
  {
    name: "Saheel Jagruti",
    src: "./saheel.jpg",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "Savvy Saheel",
    src: "./saheel.jpg",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "Heenal",
    src: "./saheel.jpg",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "Hammesh",
    src: "./saheel.jpg",
    profile: "https://links.papareact.com/4u4",
  },
  {
    name: "Saheel Jagruti",
    src: "./saheel.jpg",
    profile: "https://links.papareact.com/4u4",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard name={story.name} src={story.src} profile={story.profile} />
      ))}
    </div>
  );
};

const StoryCard = ({ name, src, profile }) => {
  return (
    <div className="relative w-14 h-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <img
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        // height={40}
        style={{ objectFit: "cover" }}
      />
      <img
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        layout="fill"
        style={{ objectFit: "cover", height: "100%" }}
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
};

export default Stories;
