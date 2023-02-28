import React from "react";

// Import Components
import SolutionCard from "./UI/SolutionCard";

// Import Icons
import Safe from "../assets/images/safe.svg"
import Quality from "../assets/images/quality.svg"
import Tech from "../assets/images/high-tech.svg"


const Solution = () => {
  return (
    <div className="container px-[100px] py-[50px]">
      <h3 className="text-center text-7xl font-bold mb-12">Our solution power</h3>
      <div className="flex items-center justify-center flex-wrap gap-[150px]">
        <SolutionCard 
            image={Safe}
            subtitle="High safe product solution"
        />
        <SolutionCard 
            image={Quality}
            subtitle="High-quality product solution"
        />
        <SolutionCard 
            image={Tech}
            subtitle="High tech product solution"
        />
      </div>
    </div>
  );
};

export default Solution;
