import { items } from "./data";
import { itemsStore } from "./itemsStore";
import { initEvents } from "./item-detail-events";
import { generateSingleItemTemplate, renderCartCount } from "./utils";

function renderItem(store, items) {
  const itemId = Number(new URLSearchParams(location.search).get("id"));

  const item = items.find((item) => item.id === itemId);

  const productItem = document.querySelector("#product-item");

  const isInCart = store.getItem(itemId);

  productItem.innerHTML = generateSingleItemTemplate(item, isInCart);
}

function updateUI() {
  renderItem(itemsStore, items);
  renderCartCount(itemsStore);
}

initEvents(itemsStore, updateUI);

// initial render ui
updateUI();
