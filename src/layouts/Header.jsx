import { Switch } from "@mui/material";
import React from "react";

// Import React Router Components
import { NavLink, Link } from "react-router-dom";

// Import Images and Icons
import Logo from "../assets/icons/small-logo.svg";

const Header = ({ toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-[100px] py-[50px]">
      <Link to="/" className="flex items-center gap-x-5">
        <img src={Logo} alt="Logo" />
        <span className="text-[40px]">MATRIX IT</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-x-10">
          <li>
            <NavLink to="/">Overview</NavLink>
          </li>
          <li>
            <NavLink to="About">About us</NavLink>
          </li>
          <li>
            <NavLink to="/">Our services</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact us</NavLink>
          </li>
        </ul>
      </nav>
      <Switch
        onChange={toggleTheme}
        inputProps={{ "aria-label": "controlled" }}
      />
    </header>
  );
};

export default Header;
