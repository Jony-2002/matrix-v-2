import React from "react";

const MissionCard = ({ id, name, image }) => {
  return (
    <div key={id} className="flex flex-col justify-center items-center">
      <img className="h-[350px]" src={image} alt="" />
      <p className="text-xl font-medium max-w-[350px] text-center">{name}</p>
    </div>
  );
};

export default MissionCard;
