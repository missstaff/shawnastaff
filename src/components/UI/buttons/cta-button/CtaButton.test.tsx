import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CtaButton from "./CtaButton";

describe("CtaButton", () => {
  it("should render the button with the correct text", () => {
    render(
      <MemoryRouter>
        <CtaButton to="/about">About</CtaButton>
      </MemoryRouter>
    );

    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("should navigate to the correct path when clicked", () => {
    const mockOnClick = jest.fn();
    render(
      <MemoryRouter>
        <CtaButton to="/about" onClick={mockOnClick}>
          About
        </CtaButton>
      </MemoryRouter>
    );

    const button = screen.getByText("About");
    button.click();

    expect(mockOnClick).toHaveBeenCalled();
  });
});