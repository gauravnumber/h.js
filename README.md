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

## ⚛️ Built With h.js

Check out **[HReact](https://github.com/gauravnumber/HReact/)** — a micro frontend framework built on top of `h.js`. It supports JSX, state management, and fine-grained reactivity—without the overhead of virtual DOM.

Features:
- JSX support via `h()` function
- Minimalistic `useState` and `useEffect` for reactivity
- Automatic UI updates using fine-grained re-rendering
- Ultra-lightweight and easy to learn

👉 [GitHub - HReact](https://github.com/gauravnumber/HReact/)

## 💖 Support My Work

<img src="support.jpg" alt="support" width="310" height="366"/>

