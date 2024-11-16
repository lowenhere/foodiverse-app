export const getLocalStorage = () => {
  if (typeof window == "undefined") {
    return undefined;
  }

  return window.localStorage;
};
