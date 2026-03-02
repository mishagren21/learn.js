export class ItemsStore {
  constructor() {
    this.items = window.localStorage.getItem("items")
      ? new Set(JSON.parse(window.localStorage.getItem("items")))
      : new Set([]);
  }

  saveItemsToLocalStorage() {
    window.localStorage.setItem("items", JSON.stringify([...this.items]));
  }

  addItem(item) {
    this.items.add(item);

    this.saveItemsToLocalStorage();
  }

  removeItem(id) {
    this.items.delete(id);

    this.saveItemsToLocalStorage();
  }

  updateItem(id, updatedItem) {
    this.items.delete(id);
    this.items.add(updatedItem);

    this.saveItemsToLocalStorage();
  }

  getItems() {
    return Array.from(this.items);
  }

  getItemById(id) {
    return this.items.find((item) => item === id);
  }

  clearItems() {
    this.items = new Set([]);

    this.saveItemsToLocalStorage();
  }
}

export const itemsStore = new ItemsStore();
