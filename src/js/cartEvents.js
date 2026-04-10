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

const buyBtn = document.getElementById("buy-btn");
const modal = document.getElementById("modal");
const close = document.querySelector(".close");

buyBtn.onclick = () => {
  modal.style.display = "flex";
};

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};



const adviceBtn = document.getElementById("advice-btn");
const adviceModal = document.getElementById("advice-modal");
const closeAdvice = document.getElementById("close-advice");

adviceBtn.onclick = function () {
    adviceModal.style.display = "flex";
};

closeAdvice.onclick = function () {
    adviceModal.style.display = "none";
};

window.onclick = function (e) {
    if (e.target === adviceModal) {
        adviceModal.style.display = "none";
    }
};


