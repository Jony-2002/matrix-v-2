import React from "react";

// Import Images
import Logo from "../assets/icons/big-logo.svg";

// Import React Router Components
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="banner flex items-center justify-between p-[100px] flex-wrap-reverse border-2 border-black mx-8 rounded-3xl">
      <div>
        <h2 className="__banner__text text-[70px] font-bold capitalize">
          Digital <br /> transformation
        </h2>
        <p className="__banner__subtext text-xl my-5 max-w-[700px]">
          Matrix - IT company based in Tajikistan, youth team that institutes
          and develops high-quality, safe, and high-tech business solutions.
        </p>
        <div className="links__container flex items-center gap-5">
          <Link
            className="first__link my__link px-[45px] py-[20px] rounded-lg bg-black text-white border border-black"
            to="About"
          >
            About Us
          </Link>
          <Link
            className="my__link px-[45px] py-[20px] rounded-lg border border-black"
            to="Contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div>
        <img className="__banner__img w-[498px] h-[423px]" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
