class Section {
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
  }

  addItem() {
    // takes a DOM element and adds it to the container
    //    call when adding an individial card to the DOM
  }
}
