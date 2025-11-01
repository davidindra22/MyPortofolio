import React from "react";

export default function Header() {
  return (
    <header className="relative">
      <div
        data-aos="zoom-in-down"
        className="flex flex-row justify-center absolute p-2 md:p-5 w-full z-100"
      >
        <div className="flex flex-row gap-6 *:text-center *:border-2 *:border-stone-600 *:py-1 *:px-3 *:rounded-full *:hover:bg-white *:hover:text-black *:cursor-pointer">
          <a href="#top" className="">
            Home
          </a>
          <a href="#aboutMe" className="">
            About Me
          </a>
          <a href="#Skilltools" className="">
            Skill and Tools
          </a>
          <a href="#featuredprojects" className="">
            Project Featured
          </a>
        </div>
      </div>
    </header>
  );
}
