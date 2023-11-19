import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="w-full justify-between flex mx-auto max-w-[125.3rem] items-center">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-[2.1rem]">
        <div className="flex">
          <a href="" className="p">
            Contact
          </a>
          <a href="" className="p">
          <span className="text-white px-2"> | </span>
            Privacy and Cookie Policy
          </a>
          <a href="" className="p">
          <span className="text-white px-2"> | </span>
            Terms of Usage
          </a>
          <a href="" className="p">
          <span className="text-white px-2"> | </span>
            Twitter
          </a>
        </div>
        <p className="p text-white">
          © Mastering Nova - All rights reserved - 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
