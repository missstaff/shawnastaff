import { NavLink } from "react-router-dom";
import classes from "./MenuItem.module.css";

interface MenuListItemProps {
    children: React.ReactNode;
    onClick: () => void;
    to: string
};

const MenuItem: React.FC<MenuListItemProps> = ({ children, onClick, to }) => {
    return (
        <NavLink to={to} className={classes.navLink} onClick={onClick}>
            {children}
        </NavLink>
    );
};

export default MenuItem;
