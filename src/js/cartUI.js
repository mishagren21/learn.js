import { itemsStore } from "./itemsStore.js";
import { items } from "./data.js";
import { renderCartCount } from "./utils.js";

const renderCart = (store) => {
  const itemsFromStore = store.getItems();
  const itemForRender = items.filter((item) =>
    itemsFromStore.find((itemFromStore) => Number(itemFromStore) === item.id),
  );

  let content = "";

  itemForRender.forEach((item, index) => {
    content += `<tr>
                        <td>${index + 1}</td>
                        <td> <img src="${item.img}" alt="${item.name}" class="cart-img"></td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td><button class="delete-item" data-id="${item.id}">Delete</button></td>
                      </tr>
                    `;
  });

  const table = `<table>
                      <table class="cart-table">
                      <tr class="class-header">
                      <tr>
                        <th>#</th>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                      </tr>${content}
                    </table>`;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = table;
};

function updateUI() {
  renderCartCount(itemsStore);
  renderCart(itemsStore);
}

addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-item")) {
    const itemId = event.target.dataset.id;
    itemsStore.removeItem(itemId);
    updateUI();
  }
});

// initial render
updateUI();
