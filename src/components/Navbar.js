import React from "react";

const Navbar = () => {
  return (
    <header className="flex border-2 p-2">
      <nav className="flex justify-between border-2 w-full p-2">
        <div>
          <a className="text-2xl font-bold text-blue-700 font-serif" href="/">
            Airline Test
          </a>
        </div>
        <div className="w-1/3 border-2">
          <ul className="flex justify-evenly p-1">
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
