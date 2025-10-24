"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prevVal) => !prevVal);
  };

  return (
    <header className="flex flex-col xl:flex-row items-center justify-between py-1">
      <div className="max-xl:w-full flex items-center justify-between">
        <a href="." className="text-5xl tracking-tighter font-bold">
          tozan.
        </a>
        <IoMenu
          role="button"
          size={30}
          className="cursor-pointer xl:hidden"
          onClick={handleShowMenu}
        />
      </div>
      <nav
        className={`flex flex-col ${
          showMenu ? "max-xl:flex" : "max-xl:hidden"
        } gap-y-5 xl:flex-row items-center gap-x-3.5 transition-all ease duration-1000`}
      >
        <ul className="flex text-xl font-normal flex-col gap-y-4 pt-5 xl:pt-0 xl:flex-row items-center gap-x-6">
          <li className="cursor-pointer flex items-center gap-x-1">
            <span>Members</span>
            <FaChevronDown size={15} />
          </li>
          <li className="cursor-pointer flex items-center gap-x-1">
            <span>Archive</span>
            <FaChevronDown size={15} />
          </li>
          <li className="cursor-pointer flex items-center gap-x-1">
            <span>Resources</span>
            <FaChevronDown size={15} />
          </li>
          <li className="curso r-pointer flex items-center gap-x-1">
            <span>Top authors</span>
            <HiSparkles size={15} color="orange" />
            <FaChevronDown size={15} />
          </li>
        </ul>
        <a href="." className="text-xl font-normal">
          Get Theme
        </a>
        <button
          type="button"
          className="flex items-center gap-x-2 cursor-pointer px-10 py-3 text-xl bg-gray-50 focus:outline-0 rounded-4xl"
        >
          <IoSearch size={25} />
          search
        </button>
        <button
          type="button"
          className="cursor-pointer px-10 py-3 rounded-4xl bg-[#D4FF00] text-xl"
        >
          Join
        </button>
      </nav>
    </header>
  );
}
