import {
  addCardModalTitleInput,
  addCardModalImagelinkInput,
  initialCards,
  addCardModal,
} from "../utils/constants.js";

export default class Section {
  // items -> array
  // renderer -> function that adds a single thing to the page
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    // this._cardSelector = containerSelector;
    this._containerElement = document.querySelector(containerSelector);
    console.log(this._containerElement);
  }

  renderItems() {
    this._items.forEach((card) => {
      this._renderer(card);
    });
  }

  // same as callback in 'addCardForm' event listener
  addItem(element) {
    // event.preventDefault();
    const card = {
      name: addCardModalTitleInput.value,
      link: addCardModalImagelinkInput.value,
    };
    this._renderer(card, "prepend");
    // this._containerElement.prepend(element);

    // event.target.reset();
  }
}
