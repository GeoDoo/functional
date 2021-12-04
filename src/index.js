import { ul } from "./html";

const fruits = ["Apples", "Babanas", "Oranges"];
const root = document.getElementById("root");

root.innerHTML = ul(fruits);
