type prop = {
  [key: string]: string;
};
export const createElement = (
  elementName: string,
  attr: prop,
  innerHTML: string
): HTMLElement => {
  const el = document.createElement(elementName);
  const attributes = Object.keys(attr);
  attributes.forEach((attribute) => {
    el.setAttribute(attribute, attr[attribute]);
  });
  el.innerHTML = innerHTML;
  return el;
};

export const mount = (el: HTMLElement): void => {
  document.body.appendChild(el);
};
