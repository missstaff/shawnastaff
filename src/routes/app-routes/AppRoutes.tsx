import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import { ROUTE_CONSTANTS } from "./route-constants";

/**
 * Component that defines the routes for the application.
 *
 * @returns The JSX element representing the routes.
 */
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
      <Route path={ROUTE_CONSTANTS.CONTACT} element={<Contact />} />
      <Route path={ROUTE_CONSTANTS.PROJECTS} element={<Projects />} />
      <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
