import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../../components/ui/loading-indicators/LoadingSpinner";
import { ROUTE_CONSTANTS } from "./route-constants";

const About = lazy(() => import("../../pages/about/About"));
const Contact = lazy(() => import("../../pages/contact/Contact"));
const ErrorPage = lazy(() => import("../../pages/error/Error"));
const Home = lazy(() => import("../../pages/home/Home"));
const Projects = lazy(() => import("../../pages/projects/Projects"));

/**
 * Renders the application routes.
 * @returns The rendered application routes.
 */
const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path={ROUTE_CONSTANTS.ABOUT} element={<About />} />
        <Route path={ROUTE_CONSTANTS.CONTACT} element={<Contact />} />
        <Route path={ROUTE_CONSTANTS.PROJECTS} element={<Projects />} />
        <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
