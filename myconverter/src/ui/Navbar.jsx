import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-between items-center bg-amber-200 text-black">
      <h1 className="font-extrabold text-lg md:text-2xl">Dolarcito $$</h1>
      <ul className="flex flex-wrap gap-4 mt-2 md:mt-0 font-bold">
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300 shadow-md">
          <a
            href="https://github.com/TobiEscoca/Proyect_dolarcito/tree/master/myconverter"
            target="blank"
          >
            Proyect repo
          </a>
        </li>
        <li className="p-1.5 rounded-full hover:bg-amber-100 transition-all duration-300 shadow-md">
          <a href="https://tobiescoca.github.io/Contactme/" target="blank">
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};
