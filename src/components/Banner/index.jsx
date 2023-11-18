import React from "react";
import ListItem from "../ListItem";
import camera from "../../assets/icons/camera.svg";
import frame from "../../assets/icons/image-frame.svg";
import InputWithButton from "../InputWithButton";
const Banner = () => {
  const list = [
    {
      title:
        "51 Videos, +5 hours recordings, from installation to advanced UI Features creation",
      icon: { img: camera, alt: "camera icon" },
    },
    {
      title:
        "UI Components and Resources deep dives, UI troubleshooting, Resource testing, and much more!",
      icon: { img: frame, alt: "image frame icon" },
    },
  ];
  return (
    <div className="w-full px-[2rem] middle pb-[20.2rem]">
      <div className="max-w-[123.9rem] w-full flex gap-[5.152rem] pt-[6.7rem]">
        <div className="flex max-w-[56.8rem] w-full flex-col">
          <h1 className="text-[5.2rem] font-700 leading-121.5 -tracking-[1.56px] text-white">
            The ultimate course to demystify Laravel Nova from A to Z
          </h1>
          {list.map((item) => (
            <ListItem isBordered={false} {...item} key={item.title} />
          ))}
          <div className="mt-[2rem]">
            <InputWithButton />
          </div>
        </div>
        <div className="flex-1 bg-[#272E44] h-full aspect-[4/3] rounded-[1.25rem]">
          .
        </div>
      </div>
    </div>
  );
};

export default Banner;
