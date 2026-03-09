import { items } from "./data";
import { itemsStore } from "./itemsStore";
import { generateSingleItemTemplate } from "./utils";

const itemId = new URLSearchParams(location.search).get("id");

const item = items.find((item) => item.id === Number(itemId));

const productItem = document.querySelector("#product-item");

productItem.innerHTML = generateSingleItemTemplate(item);

document.addEventListener("click", (event) => {
  const button = event.target.closest("#addToCartBtn");
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();

  const itemId = button.dataset.id;

  itemsStore.addItem({ id: Number(itemId), quantity: 1 });
});
