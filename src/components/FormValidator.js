export class FormValidator{ 
  constructor(settings, formElement) { 
    this._formSelector = settings.formSelector; 
    this._inputSelector = settings.inputSelector; 
    this._submitButtonSelector = settings.submitButtonSelector; 
    this._inactiveButtonClass = settings.inactiveButtonClass; 
    this._inputErrorClass = settings.inputErrorClass; 
    this._formElement = formElement; 
    this._inputs = Array.from(formElement.querySelectorAll(this._inputSelector)); 
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);  
  }; 

  _showInputError(inputElement, formElement) {     //показывает сообщение об ошибке 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._inputErrorClass); 
    errorElement.textContent = inputElement.validationMessage; 
  }; 

  _hideInputError(inputElement, formElement){  //скрывает сообщение об ошибке 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._inputErrorClass); 
    errorElement.textContent = ''; 
  }; 

  _toggleInputError(inputElement, formElement) { //проверка на валидацию 
    if (!inputElement.validity.valid) {  
      this._showInputError(inputElement, formElement);  
    } else {  
      this._hideInputError(inputElement, formElement);  
    }  
  }; 

  _setEventListeners(formElement) { //обработчик обытий 
    this._toggleButtonState(); 

    this._inputs.forEach((inputElement) => {  
      inputElement.addEventListener('input', () => {  
        this._toggleInputError(inputElement, formElement);  
        this._toggleButtonState();  
      });  
    }); 
  }; 

  //метод включения валидации
  enableValidation() { //запускает валидацию 
    this._setEventListeners(this._formElement);  
  };  

  _toggleButtonState() { //переключает состояние кнопки 
    const hasInvalidInput = this._inputs.some((inputElement) => !inputElement.validity.valid); 
    if (hasInvalidInput) {  
      this._buttonElement.classList.add(this._inactiveButtonClass);  
      this._buttonElement.setAttribute("disabled", true);  
    } else {  
      this._buttonElement.classList.remove(this._inactiveButtonClass);  
      this._buttonElement.removeAttribute("disabled");  
    }; 
  }; 

  resetValidation() {
    this._inputs.forEach((inputElement) => {
      this._hideInputError(inputElement, this._formElement); ;
    });
    this._toggleButtonState();
  };
} 
