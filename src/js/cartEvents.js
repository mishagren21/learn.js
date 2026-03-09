export const initCartEvents = (store, updateUI) => {
  const cartContainer = document.getElementById("cart-items");

  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = e.target.dataset.id;
      store.removeItem(id);
      updateUI();
    }
  });

  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("buy-btn")) {
      const id = e.target.dataset.id;
      console.log({ target: e.target, id });
      // updateUI();
    }
  });

  cartContainer.addEventListener("change", (e) => {
    if (e.target.classList.contains("qty-input")) {
      const id = e.target.dataset.id;
      const qty = Number(e.target.value);

      store.updateItem(id, { quantity: qty });
      updateUI();
    }
  });
};
