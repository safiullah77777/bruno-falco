import React from "react";
import ReviewCard from "../ReviewCard";

const Review = () => {
  return (
    <div className="w-full middle relative -top-[20rem] !h-0">
      <div className="max-w-[122rem] flex middle gap-[7rem] flex-col">
        <h1 className="h text-white">What our customer are saying</h1>
        <div className="grid grid-cols-2 gap-[3.5rem]">
            <ReviewCard />
            <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Review;
