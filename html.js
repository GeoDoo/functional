const li = (text, className = "") => {
  return `<li class=${className}>${text}</li>`;
};

const ul = (items, className = "") => {
  return `<ul class=${className}>${items
    .map((item) => li(item))
    .join(" ")}</ul>`;
};
