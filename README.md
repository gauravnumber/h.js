# @gauravnumber/h.js


[![npm version](https://img.shields.io/npm/v/@gauravnumber/h.js)](https://www.npmjs.com/package/@gauravnumber/h.js)
[![license](https://img.shields.io/npm/l/@gauravnumber/h.js)](https://github.com/gauravnumber/h.js/blob/main/LICENSE)

A tiny, zero-dependency DOM helper that mimics JSX/hyperscript-style syntax using plain JavaScript. Great for building UI components without any frameworks.

## ✨ Features

- Lightweight and framework-free
- Works seamlessly with functions as components
- Supports event listeners, styles, and children

## 📦 Installation

```bash
npm install @gauravnumber/h.js
```

## 🚀 Usage

```js
import { h } from "@gauravnumber/h.js";

const Hello = ({ name }) => {
  return h("span", {}, `Hello, ${name}!`);
};

const App = () =>
  h(
    "div",
    {},
    h("h1", {}, "h.js"),
    h(Hello, { name: "Gaurav" }),
    h("p", {}, "Built from scratch using vanilla JS!")
  );

document.body.appendChild(App());
```