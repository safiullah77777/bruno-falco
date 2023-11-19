import React from "react";
import men from "../../assets/images/man.png";
const ReviewCard = ({ tag, title: review, img, name, desig }) => {
  return (
    <div className="gradient-border rounded-[1.5rem]">
      <div className="flex flex-col gap-[3rem] py-[3rem] px-[4.5rem]">
        <div className="flex flex-col gap-[.8rem]">
          <p className="p !font-700 text-white !text-[2.5rem]">
            {tag || "If you are trying to code #LaravelNova"}
          </p>
          <p className="p !font-500 text-white !text-[2.1639rem]">
            {review || `“It's far more easy to learn from someone that it's rock-coding with
            Nova since the beginning. Explore the universe of Laravel Nova with
            @brunocfalcao. Don't be afraid to hit that.”`}
          </p>
        </div>
        <div className="flex gap-[1.2rem]">
          <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
            <img src={img?.src || men} alt={img?.alt || "user"} className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <p className="text-[2.3rem] text-white font-700 leading-[2.6778rem]">
              {name || 'Caneco'}
            </p>
            <p className="text-[1.8rem] font-500 text-[#7CE0FC] leading-[2.6778rem]">
              {desig || 'Laracon Speaker on a Twitter post'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
