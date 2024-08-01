/**
 * `Popup.js` class isolates methods for dealing with
 * popups (modals)
 */
export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  resetButtonText(buttonText) {
    this._popupElement.querySelector(".modal__save").textContent = buttonText;
  }

  /**
   * Opens the modal and adds the event listener for
   * the `Esc` key
   */
  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  /**
   * `PUBLIC`
   *
   * Closes the modal and removes the
   * event listener for the `Esc` key
   */
  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  /**
   * `PRIVATE`
   *
   * Closes the modal if the pressed key is `Esc`
   * @param {*} event
   */
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  /**
   * Sets event listener for the close-button
   * (the 'x' at the top right corner of the modals)
   *
   * Sets event listener for when user clicks
   * out of the modal; this will close the modal
   */
  setEventListeners() {
    // add a 'click' event listener to the 'close' icon of the popup
    const button = this._popupElement.querySelector(".modal__close");

    button.addEventListener("click", () => this.close(this._popupElement));
    // add an event listener to close the popup when the user
    //    clicks outside the modal

    this._popupElement.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
