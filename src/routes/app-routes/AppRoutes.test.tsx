import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ROUTE_CONSTANTS } from "./route-constants";

// Mock lazy-loaded components
jest.mock("../../pages/about/About", () => () => <div>About Page</div>);
jest.mock("../../pages/contact/Contact", () => () => <div>Contact Page</div>);
jest.mock("../../pages/error/Error", () => () => <div>Error Page</div>);
jest.mock("../../pages/home/Home", () => () => <div>Home Page</div>);
jest.mock("../../pages/projects/Projects", () => () => (
  <div>Projects Page</div>
));
jest.mock("../../components/ui/loading-indicators/LoadingSpinner", () => () => (
  <div>Loading Spinner</div>
));

describe("AppRoutes", () => {
  it("renders About page", async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_CONSTANTS.ABOUT]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText("About Page")).toBeInTheDocument();
  });

  it("renders Contact page", async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_CONSTANTS.CONTACT]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText("Contact Page")).toBeInTheDocument();
  });

  it("renders Projects page", async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_CONSTANTS.PROJECTS]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText("Projects Page")).toBeInTheDocument();
  });

  it("renders Home page", async () => {
    render(
      <MemoryRouter initialEntries={[ROUTE_CONSTANTS.HOME]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText("Home Page")).toBeInTheDocument();
  });

  it("renders Error page for unknown routes", async () => {
    render(
      <MemoryRouter initialEntries={["/unknown"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(await screen.findByText("Error Page")).toBeInTheDocument();
  });
});
