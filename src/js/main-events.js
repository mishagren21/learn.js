export const initMainEvents = (store, updateUI) => {
  const catalog = document.getElementById("catalog");

  catalog.addEventListener("click", (event) => {
    const button = event.target.closest("#addToCartBtn");
    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    const itemId = button.dataset.id;

    store.addItem({ id: Number(itemId), quantity: 1 });

    updateUI();
  });

  catalog.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      e.preventDefault();

      const id = e.target.dataset.id;

      store.addItem(id);
      updateUI();
    }
  });

  catalog.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-from-cart")) {
      event.preventDefault();

      const id = event.target.dataset.id;

      store.removeItem(id);
      updateUI();
    }
  });
};
