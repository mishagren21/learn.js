import { itemsStore } from "./itemsStore.js";
import { items } from "./data.js";
import { renderCartCount } from "./utils.js";
import { initCartEvents } from "./cartEvents.js";

const renderCart = (store, allProducts) => {
  const cartContainer = document.getElementById("cart-items");
  const cartData = store.getItems();

  const itemsForRender = cartData.map((cartItem) => {
    const product = allProducts.find((p) => p.id === Number(cartItem.id));
    return { ...product, id: Number(product.id), quantity: cartItem.quantity };
  });

  const total = itemsForRender.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const rows = itemsForRender
    .map(
      (item, index) => `
      <tr>
        <td>${index + 1}</td>
        <td> <img src="${item.img}" alt="${item.name}" class="cart-img"></td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <input type="number" class="qty-input" data-id="${item.id}" value="${item.quantity}" min="1">
        </td>
        <td><button class="delete-item delete-btn" data-id="${item.id}">Видалити</button></td>
      </tr>
    `,
    )
    .join("");

  cartContainer.innerHTML = `
      <table class="cart-table">${rows}</table>
      <div class="cart-total">Всього: ${total}</div>
    `;
};

function updateUI() {
  renderCart(itemsStore, items);
  renderCartCount(itemsStore);
}

initCartEvents(itemsStore, updateUI);

// initial render ui
updateUI();


const adviceForm = document.getElementById("advice-form");

adviceForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(adviceForm);


  console.log(formData.get("name"));
  console.log(formData.get("phone"));
  console.log(formData.get("email"));


  fetch("https://example.com/advice", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log("Форма відправлена", data);

    adviceForm.reset(); 
    document.getElementById("advice-modal").style.display = "none"; // закрити модалку
  })
  .catch(error => {
    console.log("Помилка", error);
  });
});