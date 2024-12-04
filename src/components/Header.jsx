import React from "react";
import { CiSearch } from "react-icons/ci";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";

const Header = () => {
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];
  return (
    <div className="flex items-center gap-5 h-20 p-5 ">
      <div className=" bg-slate-500 p-2 text-2xl rounded-md font-bold">
        MovieApp
      </div>
      <div className="flex flex-1 items-center gap-2 border p-2 rounded-md">
        <input
          placeholder="Search"
          className="outline-none flex-1 bg-transparent "
          type="text"
        />
        <CiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((mn, i) => (
        <MenuItem mn={mn} key={i} />
      ))}
    </div>
  );
};

export default Header;
