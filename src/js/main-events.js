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

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("add-to-cart")) {
    const id = e.target.dataset.id;

    itemStore.addItem(id);

    location.reload();
  }

});
document.addEventListener("click", (e) => {

  if (e.target.classList.contains("remove-from-cart")) {
    const id = e.target.dataset.id;

    itemStore.removeItem(id);

    location.reload(); 
  }

});