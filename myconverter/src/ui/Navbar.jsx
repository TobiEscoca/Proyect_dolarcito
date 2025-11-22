import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-between items-center bg-amber-200 text-black">
      <h1 className="font-extrabold text-lg md:text-2xl">Dolarcito $$</h1>
      <ul className="flex flex-wrap gap-4 mt-2 md:mt-0">
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300">
          Home
        </li>
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300">
          About
        </li>
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300">
          Contact
        </li>
      </ul>
    </div>
  );
};
