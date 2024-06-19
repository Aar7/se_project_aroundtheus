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
  addItem(data, method) {
    // event.preventDefault();
    // const card = {
    //   name: addCardModalTitleInput.value,
    //   link: addCardModalImagelinkInput.value,
    // };
    // console.log("addItem() ELEMENT: ", element);
    // this._renderer(element, "prepend");
    // console.log("ELEMENT: ", element);
    this._containerElement[method](data);

    // event.target.reset();
  }
}
