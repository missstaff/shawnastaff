import { useState, useEffect } from "react";

interface UseColorScheme {
  (): string;
}

/**
 * Custom hook that detects the user's preferred color scheme and provides it as a state.
 * @returns The current color scheme as a string.
 */
const useColorScheme: UseColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<string>(
    getInitialColorScheme()
  );

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const listener = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", listener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return colorScheme;
};

const getInitialColorScheme = (): string => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  return darkModeMediaQuery.matches ? "dark" : "light";
};

export default useColorScheme;
