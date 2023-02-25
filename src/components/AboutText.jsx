import React from "react";

// Import Logo
import Logo from "../assets/icons/big-logo.svg";

const AboutText = () => {
  return (
    <div className="banner flex justify-between items-center flex-wrap-reverse p-[100px] border-2 border-black mx-8 rounded-3xl">
      <div>
        <img className="w-[498px] h-[423px]" src={Logo} alt="" />
      </div>
      <div className="max-w-[700px]">
        <h2 className="text-[70px] font-bold capitalize">About Us</h2>
        <p className="text-xl mt-5">
          Matrix - IT company based in Tajikistan, youth team that institute and
          develop high-quality, safe, and high-tech business solutions. Also
          promotes digitalization in the region and gives the younger generation
          the opportunity to explore and develop in the field of IT.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
