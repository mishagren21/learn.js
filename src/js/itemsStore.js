export class ItemsStore {
  constructor() {
    this.items = window.localStorage.getItem("items")
      ? new Map(
          JSON.parse(window.localStorage.getItem("items")).map(([id, item]) => [
            Number(id),
            item,
          ]),
        )
      : new Map([]);
  }

  save() {
    window.localStorage.setItem("items", JSON.stringify([...this.items]));
  }

  addItem(item) {
    this.items.set(Number(item.id), item);

    this.save();
  }

  removeItem(id) {
    this.items.delete(Number(id));
    this.save();
  }

  updateItem(id, updatedItem) {
    const itemId = Number(id);
    this.items.set(itemId, { ...updatedItem, id: itemId });

    this.save();
  }

  getItems() {
    return Array.from(this.items.values());
  }

  getItem(id) {
    return this.items.get(Number(id));
  }

  clearItems() {
    this.items = new Map([]);

    this.save();
  }
}

export const itemsStore = new ItemsStore();
