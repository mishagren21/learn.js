import { items } from "./data";
import { generateSingleItemTemplate } from "./utils";

const itemId = new URLSearchParams(location.search).get("id");

const item = items.find((item) => item.id === Number(itemId));

const productItem = document.querySelector("#product-item");

productItem.innerHTML = generateSingleItemTemplate(item);

