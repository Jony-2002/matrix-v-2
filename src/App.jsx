import React from "react";

// Import React Router Components
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Custom Router
import Router from "./router/Router";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Customer from "./pages/Customer";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Router />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Customer/:CustomerID" element={<Customer />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
