import React from "react";
import user from "../../assets/images/user.png";
const Testimonial = () => {
  return (
    <section className="px-[2rem] w-full middle">
      <div className="max-w-[160.8rem] w-full gradient-border rounded-[2.5rem]">
        <div className="middle w-full py-[9.6rem] px-[2rem] flex-col gap-[1.6rem]">
          <h2 className="h2 text-center !text-[4.5rem] mb-[1.6rem] max-w-[110.5rem]">
            "Been following Bruno Falcao's course process and I'm happy for him
            for the launch! It's also great to finally have a more in-depth
            Laravel Nova course. Congrats!"
          </h2>
          <div className="w-[15.6786rem] h-[15.6786rem] rounded-full">
            <img src={user} alt="user" className="w-full h-full" />
          </div>
          <p className="p !text-[#7CE0FC]">@christophrumpel - Laravel Core Adventures Creator on a Twitter post</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
