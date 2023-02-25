import React, { createContext, useState } from "react";

// Import React Router Component
import { Outlet } from "react-router";

// Import Layouts
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

export const ThemeContext = createContext({});

const Router = () => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main id={theme}>
        <Header toggleTheme={toggleTheme} />
        <Outlet />
        <Footer />
      </main>
    </ThemeContext.Provider>
  );
};

export default Router;
