import { NavLink } from "react-router-dom";
import { ARIA_LABELS } from "../../../../constants/app-constants";
import classes from "./CtaButton.module.css";

interface CtaButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
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
const CtaButton: React.FC<CtaButtonProps> = ({ children, disabled = false, onClick, to }) => {
  return (
    <NavLink
      aria-label={`${ARIA_LABELS.navigateTo} ${children}`} 
      className={`${classes.link} ${classes.cta}`}
      onClick={(e) => {
        if(disabled){
          e.preventDefault();
          return;
        }
        if (!disabled && onClick) {
          onClick();
        }
      }}
      role="link"
      style={{ 
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      tabIndex={disabled ? -1 : 0}
      to={to? to : ""}
    >
      {children}
    </NavLink>
  );
};

export default CtaButton;
