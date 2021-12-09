export const button = (text, attributes) => {
  const element = document.createElement("button");
  const _text = document.createTextNode(text);
  const attributeKeys = Object.entries(attributes);

  attributeKeys.forEach(([key, value]) => {
    if (key === "className") element.setAttribute("class", value);
    else if (key.startsWith("on"))
      element.addEventListener(key.replace('on', '').toLocaleLowerCase(), value);
    else element.setAttribute(key.toLocaleLowerCase(), value);
  });

  element.appendChild(_text);

  return element;
};
