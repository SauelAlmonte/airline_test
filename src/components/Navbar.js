import React from "react";

const Navbar = () => {
  return (
    <header className="flex p-6">
      <nav className="flex justify-between items-center w-full">
        <div>
          <a
            className="text-2xl font-extrabold border-y-2 py-1 border-black  text-emerald-600 font-serif"
            href="/"
          >
            Airline Test
          </a>
        </div>
        <div className="w-[275px]">
          <ul className="flex justify-evenly items-center text-emerald-600 font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
