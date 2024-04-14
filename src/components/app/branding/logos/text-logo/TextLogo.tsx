import { NavLink } from "react-router-dom";
import classes from "./TextLogo.module.css";
import { ROUTE_CONSTANTS } from "../../../../../routes/app-routes/route-constants";
import { NAME } from "../../../../../constants/app-constants";

interface TextLogoProps {
  children: React.ReactNode;

}
const TextLogo: React.FC<TextLogoProps> = () => {
  return (
    <NavLink to={ROUTE_CONSTANTS.HOME} className={classes.navLogo}>
      {NAME}
    </NavLink>
  );
};

export default TextLogo;
