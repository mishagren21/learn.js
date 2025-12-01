import { items } from "./data.js";

function subtractPercent(amount, percent = 0) {
  return amount - (amount * percent) / 100;
}
const generateCatalogTemplate = (items = []) => {
  let generatedHtml = "";
  items.forEach((item) => {
    let tags = "";
    item?.tags?.forEach(
      (tag) => (tags += `<span class="tag ${tag.value}">${tag.label}</span>`),
    );
    generatedHtml += `
           <a href="./item-detail.html?id=${item.id}" class="item" data-id=${item.id}>
               <div class="image-container">
                   <div class="tags-container">
                     ${tags}
                   </div>
                   <img src=${item.img}>
               </div>
               <div class="text-container">
                   <h1>${item.name}</h1>
                   <div class="text">
                       <div class="line">
                           <p class="label">Вес</p>
                           <p class="value">${item.weightKg}</p>
                       </div>
                       <div class="line">
                           <p class="label">Двигатель</p>
                           <p class="value">${item.motor.voltage}</p>
                       </div>
                       <div class="line">
                           <p class="label">Диам. Обраб.</p>
                           <p class="value">${item.motor.diametr}</p>
                       </div>
                   </div>
                   <div class="price">
                       <p>${item.price} ₽</p>
                       ${item?.discount ? `<p class="discount">${subtractPercent(item.price, item.discount)} ₽</p>` : ""}
                   </div>
                   <button>Купить</button>
                 </div>
             </a>
         `;
  });
  return generatedHtml;
};

const catalog = document.querySelector("#catalog");
const dialog = document.querySelector("#myDialog");
const filterSelect = document.querySelector("#filterSelect");
const selectFilters = document.querySelector("#selected-filters");

const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.get("foo")); // a

let generatedHtml = generateCatalogTemplate(items);
let generatedTagsHtml = "";
const allTags = [];

items.forEach((item) => {
  if (item.tags) {
    item.tags.forEach((newTag) => {
      if (!allTags.includes(newTag.label)) {
        allTags.push(newTag.label);
      }
    });
  }
});

allTags.forEach((item) => {
  generatedTagsHtml += `<option value='${item}'>${item}</option>`;
});

const clearFilter = () => {
  selectFilters.innerHTML = "";

  const generatedHtml = generateCatalogTemplate(items);

  const url = new URL(window.location);
  url.searchParams.delete("tag");
  window.history.pushState({}, "", url);

  catalog.innerHTML = generatedHtml;
};

const selectFilter = () => {
  if (filterSelect.value) {
    const filteredItems = items.filter((item) => {
      if (!item.tags) return false;
      return item.tags.find(
        (tag) => tag.label.toLowerCase() === filterSelect.value.toLowerCase(),
      );
    });

    const url = new URL(window.location);
    url.searchParams.set("tag", filterSelect.value);
    window.history.pushState({}, "", url);

    selectFilters.innerHTML = `
           <span>
               ${filterSelect.value}
               <button type="button" class="closeBtn" onclick='clearFilter()'>Close</button>
           </span>`;

    const generatedHtml = generateCatalogTemplate(filteredItems);

    catalog.innerHTML = generatedHtml;
  }
  dialog.close();
};

catalog.innerHTML = generatedHtml;
filterSelect.innerHTML = generatedTagsHtml;

function showFilterDialog() {
  dialog.showModal();
}

function closeFilterDialog() {
  dialog.close();
}

dialog.close();

import { items } from "./data.js";
console.log(items);

const container = document.querySelector("#catalog");

function renderItems(items) {
  container.innerHTML = "";

  items.forEach((item) => {
    const tagsHTML = item.tags
      ? item.tags
          .map((tag) => `<span class="tag ${tag.value}">${tag.label}</span>`)
          .join("")
      : "";

    const card = `
              <a href="./item-detail.html?id=${item.id}" class="item-card" data-id=${item.id}>
                <img src="../img/${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>

                <div class="tags">
                ${tagsHTML}
                </div>

                <p>Вага: ${item.weightKg}</p>
                <p>Мотор: ${item.motor.voltage}, ${item.motor.diametr}</p>
                <p class="price">${item.price} грн</p>
              </a>
              `;

    container.innerHTML += card;
  });
}

renderItems(items);

document.addEventListener("click", (e) => {
  const card = e.target.closest(".item-card");
  if (!card) return;

  const id = card.dataset.id;
  window.location.href = `/item.html?id=${id}`;
});

