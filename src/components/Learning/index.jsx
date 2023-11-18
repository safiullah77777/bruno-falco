import React from "react";
import user from "../../assets/icons/user.svg";
import screen from "../../assets/icons/screen.svg";
import terminal from "../../assets/icons/terminal.svg";
import nova from "../../assets/icons/nova.svg";
import rocket from "../../assets/icons/rocket.svg";
import packages from "../../assets/icons/packages.svg";
import ListItem from "../ListItem";
const Learning = () => {
  const list = [
    {
      title: "Build UI components with high UX interoperabilities",
      img: {
        img: user,
        alt: "user icon",
      },
    },
    {
      title: "Creating a Tool end-to-end (Vue structure, Permissions, ...)",
      img: {
        img: screen,
        alt: "screen icon",
      },
    },
    {
      title: "Using Async data behaviors to refresh your UI Features",
      img: {
        img: terminal,
        alt: "terminal icon",
      },
    },
    {
      title: "How to use all out-of-the-box Nova Components",
      img: {
        img: nova,
        alt: "nova icon",
      },
    },
    {
      title:
        "Using Abstract Resource patterns to optimize your Model Resources",
      img: {
        img: rocket,
        alt: "rocket icon",
      },
    },
    {
      title: "Lots of 3rd party packages integrations",
      img: {
        img: packages,
        alt: "packages icon",
      },
    },
  ];
  return (
    <div className="w-full middle">
      <div className="flex flex-col middle gap-[5.2rem] max-w-[120rem] pt-[12.7rem] pb-[13.4rem]">
        <h2 className="h2">Things you will learn on this course</h2>
        <div className="grid grid-cols-2 gap-[1.752rem]">
            {
                list.map(item=><ListItem key={item.title} isBordered icon={item.img} title={item.title} />)
            }
        </div>
      </div>
    </div>
  );
};

export default Learning;