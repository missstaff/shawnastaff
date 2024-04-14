import { render, screen, fireEvent, act } from "@testing-library/react";
import MainNavigationMenu from "./MainNavigationMenu";
import { TEST_IDS } from "../../../../constants/test-constants";
import { PAGES } from "../../../../constants/app-constants";
import { MemoryRouter } from "react-router-dom";
import classes from "./MainNavigationMenu.module.css";

describe("MainNavigationMenu", () => {
    it("should render the main navigation menu", () => {
        render(<MemoryRouter><MainNavigationMenu /></MemoryRouter>);

        expect(screen.getByTestId(TEST_IDS.mainNavigation)).toBeInTheDocument();
    });

    it("should toggle the menu when the toggle button is clicked", () => {
        render(<MemoryRouter><MainNavigationMenu /></MemoryRouter>);

        const toggleButton = screen.getByTestId(TEST_IDS.navToggle);
        act(() => {
            fireEvent.click(toggleButton);
        });

        expect(screen.getByTestId(TEST_IDS.showMenu)).toHaveClass(classes.showMenu);

        act(() => {
            fireEvent.click(toggleButton);
        });

        expect(screen.getByTestId(TEST_IDS.showMenu)).not.toHaveClass(classes.showMenu);
    });

    it("should close the menu on mobile when a menu item is clicked", () => {
        render(<MemoryRouter><MainNavigationMenu /></MemoryRouter>);

        const menuItem = screen.getByText(PAGES.HOME);
        const toggleButton = screen.getByTestId(TEST_IDS.navToggle);

        act(() => {
            fireEvent.click(toggleButton);
        });
        act(() => {
            fireEvent.click(toggleButton);
        });

        expect(screen.getByTestId(TEST_IDS.showMenu)).not.toHaveClass(classes.showMenu);
    });

    it("should navigate to the correct page when a menu item is clicked", () => {
        render(<MemoryRouter><MainNavigationMenu /></MemoryRouter>);

        const menuItem = screen.getByText(PAGES.HOME);
        const toggleButton = screen.getByTestId(TEST_IDS.navToggle);

        act(() => {
            fireEvent.click(toggleButton);
        });
        act(() => {
            fireEvent.click(menuItem);
        });

        expect(screen.getByTestId(TEST_IDS.navTo + "-" + PAGES.HOME)).toBeInTheDocument();
    });
});