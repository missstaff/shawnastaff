import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

describe("AppRoutes", () => {
  it("should render the About page when the path is '/about'", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("should render the Contact page when the path is '/contact'", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("should render the Projects page when the path is '/projects'", () => {
    render(
      <MemoryRouter initialEntries={["/projects"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  it("should render the Home page when the path is '/'", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
