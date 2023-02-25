import React from "react";

import VisionImage from "../assets/images/vision.png";

const Vision = () => {
  return (
    <div className="px-[100px] py-[50px]">
      <h3 className="text-[70px] font-bold capitalize text-center">Our Vision</h3>
      <div className="flex items-center justify-between">
        <p className="text-xl mt-5 max-w-[700px]">
          Create an environment where youth will institute and develop a
          business based on high-quality, safe, and high-tech business
          solutions.
        </p>
        <div>
          <img src={VisionImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
