import React from "react";
import logo from "../../public/logo.svg";
import MouseOverPopover from "./BasicPopover";



const Navbar = () => {

https: return (
  <div className="container mx-auto ">
    <nav className="flex items-center ">
      <div className="left pr-[25%]  border-r-[2px] border-solid border-slate-400">
        <div className="">
          <img className="py-5" src={logo} alt="" />
        </div>
      </div>

      <div className="right flex justify-around w-full items-center">
        <select name="" id="">
          <option value="">What we do</option>
        </select>

        <a href="https://rego-portfolio.netlify.app/">Portfoliio </a>

        <a href="#">Insights</a>
        <select name="" id="">
          <option value="">About Us</option>
        </select>

        <button className="bg-orange-500 py-5 px-7 hover:text-white hover:bg-pink-800 transition-all duration-400">
          Contact Us
        </button>
        <MouseOverPopover />
      </div>
    </nav>
  </div>
);
};

export default Navbar;


