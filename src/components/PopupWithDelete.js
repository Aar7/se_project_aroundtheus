import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, handleConfirm, handleCardDeleteListener) {
    super(popupSelector);
    this._handleConfirm = handleConfirm;
    this._handleDeleteListener = handleCardDeleteListener;

    this._confirmButton = this._popupElement.querySelector(
      ".modal__delete-button"
    );
  }

  setEventListeners() {
    this._confirmButton.addEventListener("click", () => {
      this._handleDeleteListener(this._cardObject);
    });

    super.setEventListeners();
  }

  open(cardObject) {
    this._cardObject = cardObject;
    // console.log("cardObject: ", cardObject);
    super.open();
  }

  // handleDeletion() {
  //   cardObject;
  // }
}
