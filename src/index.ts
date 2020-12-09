import { createElement, mount } from "./lib";
import { add, multiply } from "./modules";

const App = createElement(
  "div",
  {
    class: "app",
  },
  `<h1>Hiya ${add(multiply(5, 10, 2), 10)}</h1>`
);

mount(App);
