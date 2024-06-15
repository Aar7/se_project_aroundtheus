import {
  addCardModalTitleInput,
  addCardModalImagelinkInput,
  initialCards,
  addCardModal,
} from "../utils/constants.js";

export default class Section {
  // items -> array
  // renderer -> function that adds a single thing to the page
  constructor({ items, renderer }, cardSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardSelector = cardSelector;
  }

  renderItems() {
    // render all elements on the page
    //    iterate through items array and call renderer() on each
    // call once on page load
    initialCards.forEach((card) => {
      this._renderer(card);
    });
  }

  // same as callback in 'addCardForm' event listener
  addItem(event) {
    // takes a DOM element and adds it to the container
    //    call when adding an individial card to the DOM
    event.preventDefault();
    const card = {
      name: addCardModalTitleInput.value,
      link: addCardModalImagelinkInput.value,
    };
    this._renderer(card, "prepend");

    event.target.reset();
  }
}
