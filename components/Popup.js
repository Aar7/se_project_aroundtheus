export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    // to be called in pre-existing event handlers in index.js
  }

  close() {}

  _handleEscClose() {
    // logic for closing popup via escape key
  }

  setEventListeners() {
    // add a 'click' event listener to the 'close' icon of the popup
    // add an event listener to close the popup when the user
    //    clicks outside the modal
  }
}
