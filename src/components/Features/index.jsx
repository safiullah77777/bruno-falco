import React from "react";
import multimedia from "../../assets/icons/multimedia.svg";
import advance from "../../assets/icons/advance.svg";
import book from "../../assets/icons/book.svg";
import FeatureCard from "../FeatureCard";
const Features = () => {
  const features = [
    {
      heading: "51 video tutorials",
      img: {
        src: multimedia,
        alt: "multimedia icon",
      },
      title: "Save literally hundreds of hours",
      desc: "From installation to Production deployment, passing by the creation of UI Features, Multi-tenancy, Authorization, Best practices, Performance optimization, you name it",
    },
    {
      heading: "Advanced deep dives",
      img: {
        src: advance,
        alt: "folder icon",
      },
      title: "Lots of hidden gems advanced topics",
      desc: "From advanced UI components, performance optimizations, multi-tenancy, testing, you'll deep dive into the architecture of Nova to build the best possible Admin Panel",
    },
    {
      heading: "The fundamentals explained",
      img: {
        src: book,
        alt: "book icon",
      },
      title: "New to Nova? You have it covered",
      desc: "You'll have a full chapter dedicated to the out of the box features + hidden gems that I found out along my Laravel Nova Projects",
    },
  ];
  return (
    <section className="w-full middle">
      <div className="flex flex-col gap-[6.886rem] max-w-[120rem] w-full pb-[10rem] border-b-[1px] border-[#fff]/[.2]">
        <div className="flex flex-col gap-[2.691rem] middle mx-auto">
          <h2 className="h2 max-w-[65rem] text-center">
            Not having that Nova Feature working as you want?
          </h2>
          <p className="p max-w-[45rem] text-center">
            51 Videos, +5 hours recordings, from installation to advanced UI
            Features creation
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[2.2rem]">
          {features.map((item) => (
            <FeatureCard {...item} key={item.heading} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
