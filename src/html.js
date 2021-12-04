export const li = (text, className = "") => {
  return `<li class="${className}"">${text}</li>`;
};

export const ul = (items, className = "") => {
  return `<ul class="${className}"">${items.join(" ")}</ul>`;
};
