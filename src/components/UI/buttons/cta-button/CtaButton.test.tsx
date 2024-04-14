import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import CtaButton from "./CtaButton";
import { PAGES } from "../../../../constants/app-constants";
import { ROUTE_CONSTANTS } from "../../../../routes/app-routes/route-constants";

describe("CtaButton", () => {
  it("should render the button with the correct text", () => {
    render(
      <MemoryRouter>
        <CtaButton to="/about">About</CtaButton>
      </MemoryRouter>
    );

    expect(screen.getByText(PAGES.ABOUT)).toBeInTheDocument();
  });

  it("should navigate to the correct path when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <MemoryRouter>
        <CtaButton to={ROUTE_CONSTANTS.PROJECTS} onClick={mockOnClick}>
          {PAGES.PROJECTS}
        </CtaButton>
      </MemoryRouter>
    );

    const button = screen.getByText(PAGES.PROJECTS);
    act(() => {
      button.click();
    });

    expect(mockOnClick).toHaveBeenCalled();
  });

  it("should not navigate when the button is disabled", () => {
    const mockOnClick = jest.fn();
    render(
      <MemoryRouter>
        <CtaButton to={ROUTE_CONSTANTS.CONTACT} disabled onClick={mockOnClick}>
          {PAGES.CONTACT}
        </CtaButton>
      </MemoryRouter>
    );

    const button = screen.getByText(PAGES.CONTACT);
    act(() => {
      button.click();
    });

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("should navigate when the button is not disabled", () => {
    const mockOnClick = jest.fn();
    render(
      <MemoryRouter>
        <CtaButton to={ROUTE_CONSTANTS.CONTACT} onClick={mockOnClick}>
          {PAGES.CONTACT}
        </CtaButton>
      </MemoryRouter>
    );

    const button = screen.getByText(PAGES.CONTACT);
    act(() => {
      button.click();
    });

    expect(mockOnClick).toHaveBeenCalled();
  });
});
