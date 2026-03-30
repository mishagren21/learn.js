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
};
