import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { TEST_IDS } from "./constants/test-constants";

test("renders main navigation menu", async () => {
  await act(async () => {
    render(<App />);
  });
  const mainNavigationMenu = screen.getByTestId(TEST_IDS.mainNavigation);
  expect(mainNavigationMenu).toBeInTheDocument();
});

test("renders app routes", async () => {
  await act(async () => {
    render(<App />);
  });
  const appRoutes = screen.getByTestId(TEST_IDS.appRoutes);
  expect(appRoutes).toBeInTheDocument();
});

test("renders error boundary", async () => {
  await act(async () => {
    render(<App />);
  });
  const errorBoundary = screen.getByTestId(TEST_IDS.errorBoundary);
  expect(errorBoundary).toBeInTheDocument();
});
