import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  _getInputValues() {
    const inputElements = Array.from(
      this._popupElement.querySelectorAll(".modal__input")
    );
    // console.log("_getInputElements: ", inputElements);
    const inputValues = {};
    inputElements.forEach((input) => {
      console.log(`input.name: ${input.name}`);
      inputValues[input.name] = input.value;
    });
    console.log("GET INPUT VALUES: ", inputValues);
    return inputValues;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      this._handleSubmit(this._getInputValues());
      event.preventDefault();
      event.target.reset();
    });
    super.setEventListeners();
  }
}
