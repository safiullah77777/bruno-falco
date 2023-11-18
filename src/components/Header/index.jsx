import React from "react";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="px-[2rem] middle w-full py-[3rem]">
      <div className="max-w-[123.9rem] w-full flex justify-between">
        <div className="w-[26.474rem]">
          <img src={logo} alt="logo" className="w-full" />
        </div>
        <div className="flex middle gap-[3.4rem]">
          <button className="p1">
            Login
          </button>
          <button className="px-[2rem] py-[1rem] rounded-[.5rem] bg-sticker-gradient text-[1.4rem] font-500 leading-121.5 -tracking-[.54px]">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
