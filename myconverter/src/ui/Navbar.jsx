import React from "react";

export const Navbar = () => {
  return (
    <div className="flex p-4 justify-between bg-amber-200 text-black">
      <h1 className="font-extrabold">Dolarcito $$</h1>
      <ul className="flex gap-4">
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300 ">
          Home
        </li>
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300 ">
          About
        </li>
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300 ">
          Contact
        </li>
      </ul>
    </div>
  );
};
