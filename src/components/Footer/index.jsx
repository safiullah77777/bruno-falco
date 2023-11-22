import React from "react";
import logo from "../../assets/images/logo.png";
const Footer = ({ hasLast }) => {
  return (
    <footer className="px-[2rem] w-full justify-between flex mx-auto max-w-[125.3rem] items-center 1023:flex-col gap-[3rem]">
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col 768:!items-center">
        <div className="flex 450:flex-col 450:items-center">
          <div className="flex">
            <a href="" className="p">
              Contact
            </a>
            <a href="" className="p">
              <span className="text-white px-2"> | </span>
              Privacy and Cookie Policy
            </a>
          </div>
          <div className="flex">
            <a href="" className="p">
              <span className="text-white px-2 inline-block 450:hidden"> | </span>
              Terms of Usage
            </a>
            <a href="" className="p">
              <span className="text-white px-2"> | </span>
              Twitter
            </a>
          </div>
        </div>
        {hasLast !== false && (
          <p className="p text-white">
            © Mastering Nova - All rights reserved - 2023
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
