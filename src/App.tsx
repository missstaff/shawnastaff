import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavigationMenu from "./components/ui/navigation/main-navigation-menu/MainNavigationMenu";
import AppRoutes from "./routes/app-routes/AppRoutes";
import classes from "./App.module.css";
import useColorScheme from "./hooks/useColorScheme";

/**
 * The root component of the application.
 * It renders the main navigation and the main content of the app.
 */
const App: React.FC = () => {
  return (
    <Router>
      <MainNavigationMenu />
      <main className={classes.mainContent}>
        <AppRoutes />
      </main>
    </Router>
  );
};

export default App;
