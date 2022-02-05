import React from "react";
// import { ReactComponent as BellIcon } from "../../icons/bell.svg";
// import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
// import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
// import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
// import { ReactComponent as CogIcon } from "../../icons/cog.svg";
// import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
// import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
// import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import "./Header.css";

const Header = () => {
  document.title = "Facebook";
  return (
    <div className="sticky top-0 z-50 bg:white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}
      <div className="flex items-center">
        <img
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          style={{ layout: "fixed" }}
        ></img>
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center sm:space-2 justify-end">
        <img />
        {/* profile pic */}

        <p className="whitespace-nowrap font-semibold pr-3">Saheel Jagruti</p>
        <ViewGridAddIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

const HeaderIcon = ({ Icon, active }) => {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx:auto group-hover:text-blue-500 ${
          active ? "text-blue-300" : ""
        }`}
      />
    </div>
  );
};

// <Navbar>
//   <NavItem icon={<PlusIcon />} />
//   <NavItem icon={<BellIcon />} />
//   <NavItem icon={<MessengerIcon />} />

//   <NavItem icon={<CaretIcon />}>
//     {/* <DropdownMenu></DropdownMenu> */}
//   </NavItem>
// </Navbar>
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.icon}
      </a>
    </li>
  );
};

export default Header;
