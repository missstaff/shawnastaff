import { NavLink } from "react-router-dom";
import classes from "./MenuItem.module.css";
import { TEST_IDS } from "../../../../constants/test-constants";

interface MenuListItemProps {
  children: React.ReactNode;
  onClick: () => void;
  to: string;
}

const MenuItem: React.FC<MenuListItemProps> = ({ children, onClick, to }) => {
  return (
    <NavLink to={to} className={classes.navLink} data-testid={`${TEST_IDS.navTo}-${children}`} onClick={onClick} role="link">
      {children}
    </NavLink>
  );
};

export default MenuItem;
