import React from "react";

const FeatureCard = ({ img ,title,heading,desc}) => {
  return (
    <div className="gradient-border rounded-[2.5rem] w-full">
      <div className="py-[5.5rem] px-[4rem] flex flex-col middle gap-[1.7rem]">
        <div className="w-[16.378rem] aspect-[1/1] rounded-full middle bg-[#0A122A]/[.4]">
          <img src={img.src} alt={img.src} />
        </div>
        <h3 className="h3 text-center text-white  1280:!text-[2.6rem]">{heading}</h3>
        <p className="p1 text-white text-center 1280:!text-[1.6rem]">{title}</p>
        <p className="p text-center">{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
