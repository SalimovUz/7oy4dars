import React from "react";
import logo from "../../public/logo.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto ">
      <nav className="flex justify-between ">
        <div className="left border-r-[2px] border-solid border-slate-400">
          <div className="w-2/5">
            <img className="" src={logo} alt="" />
          </div>
        </div>

        <div className="right">
          <select name="" id="">
            <option value="">What we do</option>
          </select>

          <a href="https://rego-portfolio.netlify.app/">Portfoliio </a>

          <a href="#">Insights</a>

          <select name="" id="">
            <option value="">About Us</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
