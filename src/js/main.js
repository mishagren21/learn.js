import { items } from "./data.js";
import { generateCatalogTemplate } from "./utils.js";

const catalog = document.querySelector("#catalog");
const dialog = document.querySelector("#myDialog");
const filterSelect = document.querySelector("#filterSelect");
const selectFilters = document.querySelector("#selected-filters");

const generatedHtml = generateCatalogTemplate(items);

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

function showFilterDialog() {
  dialog.showModal();
}

function closeFilterDialog() {
  dialog.close();
}

// dialog.close();

// render UI
//
catalog.innerHTML = generatedHtml;
filterSelect.innerHTML = generatedTagsHtml;
// render UI
//
