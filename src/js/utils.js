function subtractPercent(amount, percent = 0) {
  return amount - (amount * percent) / 100;
}

export const generateCatalogTemplate = (items = []) => {
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
