import Popup from "./Popup.js";

// create an instance of this class for each form-containing popup and
//    call setEventListeners()
// handleSubmit -> callback for when "submit" fires on the forms
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    const inputElements = Array.from(
      this._popupElement.querySelectorAll(".modal__input")
    );
    const inputValues = {};
    inputElements.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
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
    // this._popupElement.addEventListener("submit", this._handleSubmit);
    this._popupElement.addEventListener("submit", this._handleSubmit);
    this._popupElement.addEventListener("submit", (event) => {
      event.preventDefault();
      event.target.reset();
    });
    super.setEventListeners();
    // OVERRIDING CODE
    //    add a 'submit' event listener to the form and call
    //      the super.setEventListeners()
  }
}