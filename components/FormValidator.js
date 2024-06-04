export default class FormValidator {
  /* settings: stores SELECTORS and form CLASSES
                this is configObj from validation.js*/

  // formElement: FORM ELEMENT to be validated
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;

    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._settings.errorClass);
  }

  _hasValidInput() {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleSubmitButtonState() {
    if (this._hasValidInput(this._inputElements)) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.setAttribute("disabled", "");
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
      this._submitButton.removeAttribute("disabled");
    }
  }

  _setEventHandlers() {
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleSubmitButtonState();
      });
    });
  }

  _resetValidation() {
    this.toggleSubmitButtonState();

    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventHandlers();
  }
}
