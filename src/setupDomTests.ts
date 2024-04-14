/**
 * Sets up a mock implementation for the `matchMedia` function on the `window` object.
 * This mock implementation returns an object with properties and methods commonly found on a `MediaQueryList` object.
 * @param {string} query - The media query string.
 * @returns {Object} - An object representing the mock implementation of `matchMedia`.
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
export {};
