"use client";
import CtaButton from "../../../ui/buttons/cta-button/CtaButton";
import { TEST_IDS } from "../../../../constants/test-constants";
import classes from "./FallbackRender.module.css";

interface ErrorBoundaryProps {
  error: Error;
  resetErrorBoundary: () => void;
}

interface Error {
  message: string;
}

/**
 * Renders the fallback UI for the ErrorBoundary component.
 *
 * @param {ErrorBoundaryProps} props - The props for the ErrorBoundary component.
 * @param {Error} props.error - The error object that caused the error boundary to be triggered.
 * @param {() => void} props.resetErrorBoundary - A function to reset the error boundary and try again.
 * @returns {React.ReactElement} The rendered fallback UI.
 */
const FallbackRender: React.FC<ErrorBoundaryProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div
      className={classes.container}
      data-testid={TEST_IDS.fallbackRender}
      role="alert"
    >
      <p className={classes.message}>Something went wrong:</p>
      <pre role="contentinfo" className={classes.error}>
        {error.message}
      </pre>
      <CtaButton onClick={resetErrorBoundary}>Try again</CtaButton>
    </div>
  );
};

export default FallbackRender;
