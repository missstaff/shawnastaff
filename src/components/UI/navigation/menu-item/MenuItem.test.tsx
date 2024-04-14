import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MenuItem from "./MenuItem";
import { ROUTE_CONSTANTS } from "../../../../routes/app-routes/route-constants";

describe("MenuItem", () => {
  it("should render the menu item with the correct text", () => {
    const text = "Menu Item";
    render(
      <MemoryRouter>
        <MenuItem to={ROUTE_CONSTANTS.HOME} onClick={() => {}}>
          {text}
        </MenuItem>
      </MemoryRouter>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should navigate to the correct path when clicked", () => {
    const path = "/about";
    const { container } = render(
      <MemoryRouter>
        <MenuItem to={path} onClick={() => {}}>
          Menu Item
        </MenuItem>
      </MemoryRouter>
    );

    const menuItem = container.querySelector("a");
    expect(menuItem).toHaveAttribute("href", path);
  });

  it("should call the onClick function when clicked", () => {
    let clicked = false;
    const handleClick = () => {
      clicked = true;
    };

    render(
      <MemoryRouter>
        <MenuItem to="/" onClick={handleClick}>
          Menu Item
        </MenuItem>
      </MemoryRouter>
    );

    const menuItem = screen.getByText("Menu Item");

    act(() => {
      menuItem.click();
    });

    expect(clicked).toBe(true);
  });
});
