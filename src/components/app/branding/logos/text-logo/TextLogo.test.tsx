import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TextLogo from "./TextLogo";
import { ROUTE_CONSTANTS } from "../../../../../routes/app-routes/route-constants";
import { PAGES } from "../../../../../constants/app-constants";

describe("TextLogo", () => {
  it("should render the logo with the correct link", () => {
    render(
      <MemoryRouter>
        <TextLogo>hello</TextLogo>
      </MemoryRouter>
    );

    const logoLink = screen.getByRole("link");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", ROUTE_CONSTANTS.HOME);
  });
});
