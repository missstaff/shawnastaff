import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import MainNavigationMenu from "./components/ui/navigation/main-navigation-menu/MainNavigationMenu";
import AppRoutes from "./routes/app-routes/AppRoutes";
import FallbackRender from "./components/app/errors/fallback-render/FallbackRender";
import { TEST_IDS } from "./constants/test-constants";
import classes from "./App.module.css";

/**
 * The root component of the application.
 * It renders the main navigation and the main content of the app.
 */
const App: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    setHasError(false);
  };

  let ui = (
    <div data-testid={TEST_IDS.errorBoundary}>
      <MainNavigationMenu />
      <main className={classes.mainContent}>
        <AppRoutes />
      </main>
    </div>
  );

  if (hasError) {
    ui = (
      <FallbackRender
        data-testid={TEST_IDS.errorBoundary}
        error={{ message: "An unknown error occurred" }}
        resetErrorBoundary={handleError}
      />
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={FallbackRender}
      onReset={(details) => {
        console.log("Error was reset with the following details:", details);
        setHasError(false);
      }}
      resetKeys={[hasError]}
    >
      <Router>{ui}</Router>
    </ErrorBoundary>
  );
};

export default App;
