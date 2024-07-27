import Popup from "./Popup.js";

/**
 * Child of `Popup` class. Can obtain values from
 * input elements of the modal forms, and set the
 * event listeners to the popups
 */
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
  }

  /**
   * @returns an object containing the values of the fields
   * from the respective forms for the edit-profile and
   * add-card modals upon successful submission
   */
  _getInputValues() {
    const inputElements = Array.from(
      this._popupElement.querySelectorAll(".modal__input")
    );
    // console.log("_getInputElements: ", inputElements);
    const inputValues = {};
    inputElements.forEach((input) => {
      console.log(`input.name: ${input.name}`);
      if (input.name === "cardName") {
        inputValues.name = input.value;
      } else {
        inputValues[input.name] = input.value;
      }
    });
    console.log("GET INPUT VALUES: ", inputValues);
    return inputValues;
  }

  /**
   * Adds an event listener to the popup according
   * to the event handler function passed to the
   * class constructor.
   *
   * Each popup element will get its own handler function.
   */
  setEventListeners() {
    this._popupElement.addEventListener("submit", (event) => {
      this._handleSubmit(this._getInputValues());
      event.preventDefault();
      event.target.reset();
    });
    super.setEventListeners();
  }
}
