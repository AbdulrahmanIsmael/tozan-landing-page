'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prevVal) => !prevVal);
  };

  return (
    <header className="flex flex-col lg:flex-row items-center justify-between py-3">
      <div className="max-lg:w-full flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">tozan.</h1>
        <IoMenu
          role="button"
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={handleShowMenu}
        />
      </div>
      <nav
        className={`flex flex-col ${
          showMenu ? 'max-lg:flex' : 'max-lg:hidden'
        } gap-y-5 lg:flex-row items-center gap-x-3.5 transition-all ease duration-1000`}
      >
        <ul className="flex flex-col gap-y-4 pt-5 lg:pt-0 lg:flex-row items-center gap-x-6">
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
        <a href=".">Get Theme</a>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="py-1.5 bg-gray-50 w-30 focus:outline-0 rounded-4xl placeholder:text-center"
        />
        <button
          type="button"
          className="px-6 py-1 rounded-4xl bg-[#D4FF00] text-lg"
        >
          Join
        </button>
      </nav>
    </header>
  );
}
