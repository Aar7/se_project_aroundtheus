import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleConfirm) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    // this._popupElement.addEventListener("submit", (event) => {
    //   this._handleSubmit(this._getInputValues());
    //   event.preventDefault();
    //   event.target.reset();
    // });
    super.setEventListeners();
  }
}
