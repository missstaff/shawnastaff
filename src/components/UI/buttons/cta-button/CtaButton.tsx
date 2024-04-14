import { NavLink } from "react-router-dom";
import classes from "./CtaButton.module.css";

interface CtaButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to: string;
}

/**
 * CtaButton component represents a call-to-action button.
 *
 * @component
 * @param {React.ReactNode} children - The content of the button.
 * @param {() => void} onClick - The function to be called when the button is clicked.
 * @param {string} to - The URL to navigate to when the button is clicked.
 * @returns {JSX.Element} - The rendered CtaButton component.
 */
const CtaButton: React.FC<CtaButtonProps> = ({ children, onClick, to }) => {
  return (
    <NavLink
      className={`${classes.link} ${classes.cta}`}
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default CtaButton;
