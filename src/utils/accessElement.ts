export const makeElementInvisible = (element: HTMLElement) => {
  element.style.visibility = "hidden";
  element.style.position = "absolute";
  element.style.opacity = "0";
};
