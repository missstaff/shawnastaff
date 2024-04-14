import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

/* #ToDo: Update the route test after the page is built*/
describe("AppRoutes", () => {
  it("renders Home component when path is /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders About component when path is /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders Contact component when path is /contact", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders Projects component when path is /projects", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  // Add more test cases for other routes if needed
});
