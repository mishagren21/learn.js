export const initEvents = (store, updateUI) => {
  const itemContainer = document.getElementById("product-item");

  itemContainer.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains("add-to-cart-btn")) {
      const itemId = e.target.dataset.id;
      store.addItem({ id: Number(itemId), quantity: 1 });
      updateUI();
    }
  });

  // document.addEventListener("click", (event) => {
  //   const button = event.target.closest("#addToCartBtn");
  //   if (!button) return;

  //   event.preventDefault();
  //   event.stopPropagation();

  //   const itemId = button.dataset.id;

  //   itemsStore.addItem({ id: Number(itemId), quantity: 1 });
  // });

  itemContainer.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.classList.contains("buy-btn")) {
      const id = e.target.dataset.id;
      console.log({ target: e.target, id });
      // updateUI();
    }
  });
};
