import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import CtaButton from "../../buttons/cta-button/CtaButton";
import MenuItem from "../menu-item/MenuItem";
import TextLogo from "../../../app/branding/logos/text-logo/TextLogo";
import { ARIA_LABELS, NAME, PAGES } from "../../../../constants/app-constants";
import { ROUTE_CONSTANTS } from "../../../../routes/app-routes/route-constants";
import { TEST_IDS } from "../../../../constants/test-constants";
import classes from "./MainNavigationMenu.module.css";

const MainNavigationMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header className={classes.header} data-testid={TEST_IDS.mainNavigation}>
      <nav
        aria-label={ARIA_LABELS.navigation}
        className={`${classes.nav} ${classes.container}`}
        role="navigation"
      >
        <TextLogo>{NAME}</TextLogo>

        <div
          className={`${classes.navMenu} ${showMenu ? classes.showMenu : ""}`}
          data-testid={TEST_IDS.showMenu}
        >
          <ul className={classes.navList} data-testid={TEST_IDS.appRoutes}>
            <li>
              <MenuItem to={ROUTE_CONSTANTS.HOME} onClick={closeMenuOnMobile}>
                {PAGES.HOME}
              </MenuItem>
            </li>
            <li>
              <MenuItem to={ROUTE_CONSTANTS.ABOUT} onClick={closeMenuOnMobile}>
                {PAGES.ABOUT}
              </MenuItem>
            </li>
            <li>
              <MenuItem
                to={ROUTE_CONSTANTS.PROJECTS}
                onClick={closeMenuOnMobile}
              >
                {PAGES.PROJECTS}
              </MenuItem>
            </li>
            <li>
              <CtaButton
                to={ROUTE_CONSTANTS.CONTACT}
                onClick={closeMenuOnMobile}
              >
                {PAGES.CONTACT}
              </CtaButton>
            </li>
          </ul>
          <div
            aria-label={ARIA_LABELS.ToggleMobileNavigation}
            className={classes.navClose}
            data-testid={TEST_IDS.navToggle}
            onClick={toggleMenu}
            role="button"
          >
            <IoClose />
          </div>
        </div>

        <div
          aria-label={ARIA_LABELS.ToggleMobileNavigation}
          className={classes.navToggle}
          onClick={toggleMenu}
          role="button"
        >
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigationMenu;
