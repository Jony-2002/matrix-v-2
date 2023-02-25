import React from "react";

// Import Data
import { MissionData } from "../data/mission";

// Import Components
import MissionCard from "./UI/MissionCard";

const Mission = () => {
  return (
    <div className="px-[100px] py-[50px]">
      <h3 className="text-[70px] font-bold capitalize text-center mb-10">
        Our missions
      </h3>
      <div className="flex justify-evenly items-center flex-wrap">
        {MissionData.map((mission) => {
          return (
            <MissionCard
              key={mission.id}
              id={mission.id}
              name={mission.name}
              image={mission.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
