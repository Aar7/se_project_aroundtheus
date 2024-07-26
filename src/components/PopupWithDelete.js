import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      this._handleConfirm;
      event.preventDefault();
      event.target.reset();
    });

    super.setEventListeners();
  }
}
