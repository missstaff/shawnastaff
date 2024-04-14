import { NavLink } from "react-router-dom";
import classes from "./CtaButton.module.css";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, onClick, to }) => {
  return (
    <NavLink
      to={to}
      className={`${classes.link} ${classes.cta}`}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default CtaButton;
