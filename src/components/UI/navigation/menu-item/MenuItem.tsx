import { NavLink } from "react-router-dom";
import { ARIA_LABELS } from "../../../../constants/app-constants";
import { TEST_IDS } from "../../../../constants/test-constants";
import classes from "./MenuItem.module.css";

interface MenuListItemProps {
  ariaLabel?: string;
  children: React.ReactNode;
  onClick: () => void;
  to: string;
}

const MenuItem: React.FC<MenuListItemProps> = ({ children, onClick, to }) => {
  return (
    <NavLink
      aria-label={`${ARIA_LABELS.navigateTo} ${children}`}
      className={classes.navLink}
      data-testid={`${TEST_IDS.navTo}-${children}`}
      onClick={onClick}
      role="link"
      tabIndex={0}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default MenuItem;
