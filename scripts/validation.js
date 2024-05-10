const configObj = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function checkInputValidity(formElement, inputElement, configObj) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, configObj);
  } else {
    hideInputError(formElement, inputElement, configObj);
  }
}

function showInputError(formElement, inputElement, configObj) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(configObj.inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(configObj.errorClass);
}

function hideInputError(formElement, inputElement, configObj) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(configObj.inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(configObj.errorClass);
}

function hasInvalidInput(inputElements) {
  return inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputElements, submitButton) {
  if (hasInvalidInput(inputElements)) {
    submitButton.classList.add(configObj.inactiveButtonClass);
    submitButton.setAttribute("disabled", "");
  } else {
    submitButton.classList.remove(configObj.inactiveButtonClass);
    submitButton.removeAttribute("disabled");
  }
}

function setEventListeners(formElement, configObj) {
  const { inputSelector } = configObj;
  const inputElements = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(
    configObj.submitButtonSelector
  );
  console.log(submitButton);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, configObj);
      toggleButtonState(inputElements, submitButton);
    });
  });
}

function enableValidation(configObj) {
  const formElements = Array.from(
    document.querySelectorAll(configObj.formSelector)
  );
  // console.log(formElements);

  formElements.forEach((formElement) => {
    // console.log(formElement);
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(formElement, configObj);
  });
}

function closeModals() {
  const modals = Array.from(document.querySelectorAll(".modal"));
  console.log(modals);

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        closeModal(modal);
        console.log(event.target);
      }
    });
    document.addEventListener("keydown", (event) => {
      // console.log(event);
      if (event.key === "Escape") {
        closeModal(modal);
        console.log(event.target);
        // console.log(event.currentTarget);
      }
    });
  });
}
// FUNCTION CALLS
enableValidation(configObj);
closeModals();
