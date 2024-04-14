import { renderHook, act } from "@testing-library/react";
import useColorScheme from "./useColorScheme";

describe("useColorScheme", () => {
  let matchMedia: any;

  beforeEach(() => {
    matchMedia = window.matchMedia;
  });

  afterEach(() => {
    window.matchMedia = matchMedia;
  });

  it("should return the initial color scheme as light", () => {
    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");
  });

  it("should update the color scheme to dark when media query matches", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("dark");
  });

  it("should update the color scheme to light when media query does not match", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: light)",
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useColorScheme());
    expect(result.current).toBe("light");
  });
});
