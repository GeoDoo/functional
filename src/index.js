import "tachyons";
import { ul, li } from "./html";

const root = document.getElementById("root");

root.innerHTML = ul(
  [
    li("Apples", "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"),
    li("Bananas", "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"),
    li("Oranges", "lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"),
  ],
  "list pa3 measure center"
);
