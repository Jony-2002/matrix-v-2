import React from "react";

// Import Components
import HomeBanner from "../components/HomeBanner";
import Solution from "../components/Solution";
import Services from "../components/Services";
import Customers from "../components/Customers";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <Solution />
      <Services />
      <Customers />
    </div>
  );
};

export default Home;
