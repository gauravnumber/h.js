export const h = (tag, props, ...children) => {
  props = props ?? {};

  if (typeof tag === "function") {
    return tag(props);
  }

  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(props))
    if (key.startsWith("on") && typeof value === "function")
      element.addEventListener(key.slice(2).toLowerCase(), value);
    else if (key === "style" && typeof value === "object")
      Object.assign(element.style, value);
    else if (key === "className") {
      element.className = value;
    } else {
      element.setAttribute(key, value);
    }

  for (const child of children)
    element.append(
      typeof child === "string" ? document.createTextNode(child) : child
    );

  return element;
};


