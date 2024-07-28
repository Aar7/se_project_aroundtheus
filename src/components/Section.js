export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  /**
   * Iterates through an array of cards
   * (returned from `api.getInitialCards()` for example)
   * and calls _renderer (`renderCard(card, method="append")`)
   */
  renderItems() {
    this._items.forEach((item) => {
      // console.log("item from renderItems loop[Section]", item);
      this._renderer(item);
    });
  }
  // renderItems(cards) {
  //   cards.forEach((card) => {
  //     this._renderer(card);
  //   });
  // }

  /**
   * Same as callback in 'addCardForm' event listener
   * @param {Card} card `Card` object
   * @param {string} method string representing the method
   * used to add the card to the document flow (`append` or `prepend`)
   */
  addItem(card, method) {
    this._containerElement[method](card);
  }
}
