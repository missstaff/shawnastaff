import React from "react";
import { useRouteError } from "react-router-dom";
import CtaButton from "../../components/ui/buttons/cta-button/CtaButton";
import { ROUTE_CONSTANTS } from "../../routes/app-routes/route-constants";
import { TEST_IDS } from "../../constants/test-constants";
import classes from "./Error.module.css";

interface Error {
  status: number;
  message: string;
}

/**
 * The error page component.
 * It is rendered when an error occurs in the application.
 */

const Index: React.FC = () => {
  const error = useRouteError();

  let title = "An error occured.";
  let message = "Sorry, something went wrong.";

  const errorStatus: Error = error as Error;

  if (errorStatus.status === 401) {
    title = "Unauthorized!";
    message = "You do not have access to this resource.";
  }

  if (errorStatus.status === 403) {
    title = "Forbidden!";
    message = "This action is not allowed.";
  }

  if (errorStatus.status === 404) {
    title = "Page not found!";
    message = "Sorry, the page you were looking for does not exist.";
  }

  if (errorStatus.status === 500) {
    title = "Server error";
    message = "Sorry, the server is not responding";
  }
  return (
    <div
      className={classes.container}
      data-testid={TEST_IDS.fallbackRender}
      role="alert"
    >
      <p className={classes.message}>{title}</p>
      <pre role="contentinfo" className={classes.error}>
        {message}
      </pre>
      <CtaButton to={ROUTE_CONSTANTS.HOME}>Try again</CtaButton>
    </div>
  );
};

export default Index;
