export default class FormValidator {
  /* settings: stores SELECTORS and form CLASSES
                this is configObj from validation.js*/

  // formElement: FORM ELEMENT to be validated
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

  _checkInputValidity(formElement, inputElement, configObj) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, configObj);
    } else {
      this._hideInputError(formElement, inputElement, configObj);
    }
  }

  _showInputError(formElement, inputElement, configObj) {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(configObj.inputErrorClass);
    errorMessageElement.textContent = inputElement.validationMessage;
    errorMessageElement.classList.add(configObj.errorClass);
  }

  _hideInputError(formElement, inputElement, configObj) {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(configObj.inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(configObj.errorClass);
  }

  _hasValidInput(inputElements) {
    return inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleSubmitButtonState(inputElements, submitButton, configObj) {
    if (this._hasValidInput(inputElements)) {
      submitButton.classList.add(configObj.inactiveButtonClass);
      submitButton.setAttribute("disabled", "");
    } else {
      submitButton.classList.remove(configObj.inactiveButtonClass);
      submitButton.removeAttribute("disabled");
    }
  }

  _setEventHandlers(formElement, configObj) {
    const { inputSelector } = configObj;
    const inputElements = Array.from(
      formElement.querySelectorAll(inputSelector)
    );
    const submitButton = formElement.querySelector(
      configObj.submitButtonSelector
    );
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, configObj);
        this._toggleSubmitButtonState(inputElements, submitButton, configObj);
      });
    });
  }

  enableValidation(formElement) {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventHandlers(this._formElement, this._settings);
  }
}
