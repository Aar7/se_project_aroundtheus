import FormValidator from "../components/FormValidator.js";

const configObj = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

// FUNCTION CALLS
const formElements = Array.from(
  document.querySelectorAll(configObj.formSelector)
);
console.log("formElements: ", formElements);

export const formValidators = {}; // object containing FormValidation classes

formElements.forEach((formElement) => {
  const newValidation = new FormValidator(configObj, formElement);
  formValidators[formElement.name] = newValidation;
  newValidation.enableValidation(formElement);
});
