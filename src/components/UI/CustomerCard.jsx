import React from "react";

// Import React Router Components
import { Link } from "react-router-dom";

const CustomerCard = ({ id, image, name, url }) => {
  return (
    <Link to={url} className="customer__card flex flex-col justify-center items-center gap-5" key={id}>
      <img src={image} alt="" />
      <p className="w-[200px] text-center text-2xl font-medium">{name}</p>
    </Link>
  );
};

export default CustomerCard;
