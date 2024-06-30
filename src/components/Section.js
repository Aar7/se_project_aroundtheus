export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  /**
   * Iterates through an array of cards
   * (returned from api.getInitialCards() for example)
   * and calls _renderer (renderCard(card, method="append"))
   */
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  // renderItems(cards) {
  //   cards.forEach((card) => {
  //     this._renderer(card);
  //   });
  // }

  // same as callback in 'addCardForm' event listener
  addItem(data, method) {
    this._containerElement[method](data);
  }
}
