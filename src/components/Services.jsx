import React from "react";

// Import Components
import ServicesCard from "./UI/ServicesCard";

// Import Services Data
import ServicesData from "../data/services.json";

const Services = () => {
  return (
    <div className="px-[100px] py-[50px]">
      <h3 className="text-7xl text-center font-bold mb-12">Our Services</h3>
      <div className="flex justify-center items-center flex-wrap gap-[80px]">
        {ServicesData.map((service) => {
          return <ServicesCard id={service.id} name={service.name} key={service.id}/>;
        })}
      </div>
    </div>
  );
};

export default Services;
