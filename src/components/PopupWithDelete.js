import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleConfirm, handleCardDeleteListener) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._handleDeleteListener = handleCardDeleteListener;
    this._submitButton = this._popupElement.querySelector(".modal__save");
    this._submitButtonText = this._submitButton.textContent;
  }

  setEventListeners() {
    this._submitButton.addEventListener("click", () => {
      this._handleDeleteListener(this._cardObject);
    });

    super.setEventListeners();
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  open(cardObject) {
    this._cardObject = cardObject;
    super.open();
  }
}
