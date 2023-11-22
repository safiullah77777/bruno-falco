import React from "react";
import ReviewCard from "../ReviewCard";

const Review = () => {
  return (
    <section className="px-[2rem] w-full middle relative">
      <div className="max-w-[122rem] flex middle gap-[7rem] flex-col">
        <h1 className="h text-white">What our customer are saying</h1>
        <div className="grid grid-cols-2 gap-[3.5rem] 450:grid-cols-1">
            <ReviewCard />
            <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Review;
