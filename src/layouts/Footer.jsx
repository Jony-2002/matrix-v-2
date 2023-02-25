import React from "react";

// Import React Router Components
import { Link } from "react-router-dom";

// Import Logo
import Logo from "../assets/icons/small-logo.svg";

const Footer = () => {
  return (
    <footer className="px-[100px] py-[50px]">
      <div>
        <div className="flex justify-between items-start">
          <div>
            <Link to="/" className="flex items-center gap-x-5">
              <img src={Logo} alt="" />
              <span className="text-2xl font-semibold">MATRIX IT</span>
            </Link>
            <p className="text-lg font-medium max-w-[400px]">
              High-quality, safe, and high-tech business solutions.{" "}
            </p>
          </div>
          <nav>
            <h4 className="mb-10 text-xl font-bold">Menu</h4>
            <ul className="flex flex-col justify-start items-start gap-5">
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Our services</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h4 className="mb-10 text-xl font-bold">Contacts</h4>
            <div className="flex flex-col justify-start items-start gap-5">
              <a href="tel:+(992) 11 114 3040">(992) 11 114 3040</a>
              <a href="mailto:info@matrix.tj">info@matrix.tj</a>
              <p>
                736000, Tajikistan, <br /> GBAO, Khorog
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
