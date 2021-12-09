import "tachyons";
import html from "./app";
import { button } from "./elements/button";

const main = () => {
  // document.getElementById("root").innerHTML = html;
  const root = document.getElementById("root");
  root.appendChild(
    button("Save", {
      className: "primary",
      onClick: () => alert("hi!"),
    })
  );
};

main();
