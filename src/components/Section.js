export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // same as callback in 'addCardForm' event listener
  addItem(data, method) {
    this._containerElement[method](data);
  }
}
