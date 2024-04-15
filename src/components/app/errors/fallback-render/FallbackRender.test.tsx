import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FallbackRender from "./FallbackRender";

describe("FallbackRender", () => {
  it("should render the error message", () => {
    const error = new Error("Test error");
    render(
      <MemoryRouter>
        <FallbackRender error={error} resetErrorBoundary={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText("Something went wrong:")).toBeInTheDocument();
    expect(screen.getByText("Test error")).toBeInTheDocument();
  });

  it("should call resetErrorBoundary when 'Try again' button is clicked", () => {
    const error = new Error("Test error");
    const resetErrorBoundaryMock = jest.fn();
    render(
      <MemoryRouter>
        <FallbackRender
          error={error}
          resetErrorBoundary={resetErrorBoundaryMock}
        />
      </MemoryRouter>
    );

    const tryAgainButton = screen.getByText("Try again");
    act(() => {
      fireEvent.click(tryAgainButton);
    });

    expect(resetErrorBoundaryMock).toHaveBeenCalledTimes(1);
  });
});
