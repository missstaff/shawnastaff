import React from "react";
import classes from "./LoadingSpinner.module.css";
import { TEST_IDS } from "../../../constants/test-constants";

/**
 * A loading spinner component.
 */
const LoadingSpinner: React.FC = () => {
  return (
    <div aria-label="Loading spinner" className={classes.loadingSpinnerContainer} data-testid={TEST_IDS.LoadingSpinner} role="progressbar">
      <div className={classes.loadingSpinner}></div>
    </div>
  );
};

export default LoadingSpinner;
