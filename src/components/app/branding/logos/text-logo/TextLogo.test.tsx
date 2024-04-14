import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import TextLogo from "./TextLogo";
import { ROUTE_CONSTANTS } from "../../../../../routes/app-routes/route-constants";

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

  it("should navigate to the correct page when clicked", () => {
    render(
      <MemoryRouter>
        <TextLogo>hello</TextLogo>
      </MemoryRouter>
    );

    const logoLink = screen.getByRole("link");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", ROUTE_CONSTANTS.HOME);
    act(() => {
      logoLink.click();
    });
    expect(window.location.pathname).toBe(ROUTE_CONSTANTS.HOME);
  });
});
