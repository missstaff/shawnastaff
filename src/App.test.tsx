import { render, screen } from "@testing-library/react";
import App from "./App";
import { TEST_IDS } from "./constants/test-constants";

describe("App", () => {
    it("renders MainNavigation component", () => {
        render(<App />);
        expect(screen.getByTestId(TEST_IDS.mainNavigation)).toBeInTheDocument();
    });

    it("renders AppRoutes component", () => {
        render(<App />);
        expect(screen.getByTestId(TEST_IDS.appRoutes)).toBeInTheDocument();
    });
});
