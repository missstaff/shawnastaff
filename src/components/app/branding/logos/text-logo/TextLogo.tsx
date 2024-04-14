import { NavLink } from "react-router-dom";
import { NAME } from "../../../../../constants/app-constants";
import { ROUTE_CONSTANTS } from "../../../../../routes/app-routes/route-constants";
import classes from "./TextLogo.module.css";

interface TextLogoProps {
  children: React.ReactNode;
}

/**
 * Renders the text logo component.
 *
 * @returns The rendered text logo component.
 */
const TextLogo: React.FC<TextLogoProps> = () => {
  return (
    <NavLink className={classes.navLogo} role="link" to={ROUTE_CONSTANTS.HOME}>
      {NAME}
    </NavLink>
  );
};

export default TextLogo;
