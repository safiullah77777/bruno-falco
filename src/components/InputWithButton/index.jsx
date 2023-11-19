import React from "react";
import envelope from "../../assets/icons/envelope.svg";
const InputWithButton = ({ isChange }) => {
  return (
    <div
      className={`relative flex ${
        isChange && "!bg-[#000]/[.4]"
      } bg-purple-secondary p-[1rem] rounded-[1rem] h-[6.4rem]`}
    >
      <img src={envelope} alt="envelope icon" className="w-[2.4rem]" />
      <div className="flex-1 flex flex-col ml-[.7rem]">
        <span className="text-[1.2rem] text-white">Email</span>
        <input
          type="text"
          className="w-full pr-[20rem]  outline-none border-none bg-transparent h-[2.2rem] text-sky-primary text-[2rem] font-500 -tracking-[.36px]"
          name=""
          id=""
        />
      </div>
      <button className={`${isChange && '!bg-[#fff] !bg-none'} absolute right-[1rem] py-[1.35rem] px-[2rem] rounded-[.5rem] bg-gradient2 top-[1rem] font-700 text-[1.4rem] leading-121.5 tracking-[1.68px] uppercase text-blue-primary`}>
        Keep me updated
      </button>
    </div>
  );
};

export default InputWithButton;
