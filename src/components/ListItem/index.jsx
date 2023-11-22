import React from "react";

const ListItem = ({ isBordered = false, title, icon }) => {
  return (
    <div className={`${isBordered && "gradient-border before:!p-[1.5px]"} `}>
      <div className={`w-full flex gap-[1.3rem] items-center py-[2.5rem] ${isBordered && "p-[2.5rem]"}`}>
        <div className="flex middle w-[5.5rem] h-[5.5rem] aspect-[1/1] rounded-[1.6rem] bg-gradient2">
          <img src={icon?.img} alt={icon?.alt} />
        </div>
        <p className="p">{title}</p>
      </div>
    </div>
  );
};

export default ListItem;
