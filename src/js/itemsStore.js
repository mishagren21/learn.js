export class ItemsStore {
  constructor() {
    this.items = window.localStorage.getItem("items")
      ? JSON.parse(window.localStorage.getItem("items"))
      : [];
  }

  saveItemsToLocalStorage() {
    window.localStorage.setItem("items", JSON.stringify(this.items));
  }

  addItem(item) {
    this.items.push(item);

    this.saveItemsToLocalStorage();
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item !== id);

    this.saveItemsToLocalStorage();
  }

  updateItem(id, updatedItem) {
    const index = this.items.findIndex((item) => item === id);
    if (index !== -1) {
      this.items[index] = updatedItem;

      this.saveItemsToLocalStorage();
    }
  }

  getItems() {
    return this.items;
  }

  getItemById(id) {
    return this.items.find((item) => item === id);
  }

  clearItems() {
    this.items = [];

    this.saveItemsToLocalStorage();
  }
}

export const itemsStore = new ItemsStore();
