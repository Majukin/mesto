const formElement = document.querySelector('.popup__form');
const inputElement = formElement.querySelector('.popup__input');

const showInputError = (formElement, inputElement, objectForm) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(objectForm.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage; 
};

const hideInputError = (formElement, inputElement, objectForm) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(objectForm.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, objectForm) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, objectForm);
  } else {
    hideInputError(formElement, inputElement, objectForm);
  }
}

const setEventListeners = (formElement, objectForm) => {
  const inputList = Array.from(formElement.querySelectorAll(objectForm.inputSelector));
  const buttonElement = formElement.querySelector(objectForm.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, objectForm.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, objectForm);
      toggleButtonState(inputList, buttonElement, objectForm.inactiveButtonClass);
    });
  });
};

const enableValidation = (objectForm) => {
  const formList = Array.from(document.querySelectorAll(objectForm.formSelector)); 
formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement, objectForm);
}); 
};

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}; 

function followButtonInactive(buttonElement) {
  buttonElement.classList.add(objectForm.inactiveButtonClass);
  buttonElement.setAttribute("disabled", true);
}

function followButtonActive(buttonElement) {
  buttonElement.classList.remove(objectForm.inactiveButtonClass);
  buttonElement.removeAttribute("disabled");
}

const toggleButtonState = (inputList, buttonElement, objectForm) => {
  if (hasInvalidInput(inputList)) {
    followButtonInactive(buttonElement, objectForm);
  } else {
    followButtonActive(buttonElement, objectForm);
  }
}; 

 enableValidation(objectForm); 