import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavigation from "./components/ui/navigation/main-navigation-menu/MainNavigationMenu";
import AppRoutes from "./routes/app-routes/AppRoutes";
import "./App.css";

/**
 * The root component of the application.
 * It renders the main navigation and the main content of the app.
 */
const App: React.FC = () => {
  return (
    <Router>
      <MainNavigation />
      <main className="main-content">
        <AppRoutes />
      </main>
    </Router>
  );
};

export default App;
