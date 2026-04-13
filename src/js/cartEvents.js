export const initCartEvents = (store, updateUI) => {
  const cartContainer = document.getElementById("cart-page");

  cartContainer.addEventListener("click", (event) => {
    initAdviceDialog(event); // advice dialog
    initBuyDialog(event); // advice buy dialog

    initItemCartActions(event, store, updateUI); // handle delete item from cart
  });

  cartContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("qty-input")) {
      const id = event.target.dataset.id;
      const qty = Number(event.target.value);

      store.updateItem(id, { quantity: qty });
      updateUI();
    }
  });

  cartContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    initAdviceSubmitForm(event);
    initBuySubmitForm(event);
  });
};

function initItemCartActions(event, store, updateUI) {
  if (event.target.classList.contains("delete-btn")) {
    const id = event.target.dataset.id;
    store.removeItem(id);
    updateUI();
  }
}

function initAdviceDialog(event) {
  if (event.target.id.includes("open-advice-modal-btn")) {
    document.getElementById("advice-modal").style.display = "flex";
  }
  if (
    event.target.id.includes("close-advice-modal-btn") ||
    event.target.id.includes("dialog-overlay")
  ) {
    document.getElementById("advice-modal").style.display = "none";
  }
}

function initBuyDialog(event) {
  if (event.target.id.includes("open-buy-dialog-btn")) {
    document.getElementById("buy-modal").style.display = "flex";
  }
  if (
    event.target.id.includes("close-buy-dialog-btn") ||
    event.target.id.includes("dialog-overlay")
  ) {
    document.getElementById("buy-modal").style.display = "none";
  }
}

function initAdviceSubmitForm(event) {
  if (event.target.id.includes("advice-form")) {
    const adviceForm = document.getElementById("advice-form");
    const formData = new FormData(adviceForm);

    const data = Object.fromEntries(formData.entries());

    console.log(data);

    setTimeout(() => {
      adviceForm.reset();
      document.getElementById("advice-modal").style.display = "none"; // закрити модалку
    }, 1000);
  }
}

function initBuySubmitForm(event) {
  if (event.target.id.includes("order-form")) {
    const orderForm = document.getElementById("order-form");
    const formData = new FormData(orderForm);

    const data = Object.fromEntries(formData.entries());
    console.log(data);

    setTimeout(() => {
      orderForm.reset();
      document.getElementById("buy-modal").style.display = "none"; // закрити модалку
    }, 1000);
  }
}
