import React from "react";

const ServicesCard = ({id, name}) => {
  return (
    <div key={id} className="my__service shadow px-8 py-3 rounded-full">
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default ServicesCard;
