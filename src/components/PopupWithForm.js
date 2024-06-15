import { editProfileForm, addCardForm } from "../utils/constants.js";
import Popup from "./Popup.js";

// create an instance of this class for each form-containing popup and
//    call setEventListeners()
// handleSubmit -> callback for when "submit" fires on the forms
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    // this._popupSelector = popupSelector;
    this._handleSubmit = handleSubmit;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _getInputValues() {
    return Array.from(
      document
        .querySelector(this._popupSelector)
        .querySelectorAll(".modal__input")
    );
    // collect data from input fields and return them as an object
    //    returned object is passed tosubmission handler as an argument
  }

  open() {
    super.open();
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    super.close();
    document.removeEventListener("keydown", this._handleEscClose);
  }

  /*
  Recall: setEventListeners() sets close-button and click-out
  event listeners
  */
  // overridden from Popup parent class
  setEventListeners() {
    document
      .querySelector(this._popupSelector)
      .addEventListener("submit", this._handleSubmit);
    console.log(
      "Popup: setEventListners(): this._popupSelector: ",
      this._popupSelector
    );
    super.setEventListeners();
    // OVERRIDING CODE
    //    add a 'submit' event listener to the form and call
    //      the super.setEventListeners()
  }
}
