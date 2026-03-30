document.addEventListener("click", (event) => {
  const button = event.target.closest("#addToCartBtn");
  if (!button) return;

  event.preventDefault();
  event.stopPropagation();

  const itemId = button.dataset.id;

  itemsStore.addItem({ id: Number(itemId), quantity: 1 });

  renderCartCount(itemsStore);
});

// initial render UI
catalog.innerHTML = generatedHtml;
filterSelect.innerHTML = generatedTagsHtml;
renderCartCount(itemsStore);
// initial render UI
//


document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.dataset.id;
    console.log("Added:", id);
    this.disabled = true;
  });
});
