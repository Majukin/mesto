import {validationPopapEdit} from './index.js';
import {validationPopapAdd} from './index.js';

export class FormValidator{
    constructor(settings, inputList, buttonElement) {
      this._formSelector = settings.formSelector;
      this._inputSelector = settings.inputSelector;
      this._submitButtonSelector = settings.submitButtonSelector;
      this._inactiveButtonClass = settings.inactiveButtonClass;
      this._inputErrorClass = settings.inputErrorClass;
      this._inputList = inputList;
      this._buttonElement = buttonElement;
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

    _checkInputValidity(inputElement, formElement) { //проверка на валидацию
      if (!inputElement.validity.valid) { 
        this._showInputError(inputElement, formElement); 
      } else { 
        this._hideInputError(inputElement, formElement); 
      } 
    };

    _setEventListeners(formElement) { //обработчик обытий
      this._inputList = Array.from(formElement.querySelectorAll(this._inputSelector)); 
      this._buttonElement = formElement.querySelector(this._submitButtonSelector); 
      this._toggleButtonState();

      this._inputList.forEach((inputElement) => { 
        inputElement.addEventListener('input', () => { 
          this._checkInputValidity(inputElement, formElement); 
          this._toggleButtonState(); 
        }); 
      });
    };

    enableValidation() { //запускает валидацию
      this._formList = Array.from(document.querySelectorAll(this._formSelector));  
      this._formList.forEach((formElement)  => { 
    formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
       }); 
      this._setEventListeners(formElement); 
      });  
    }; 


    _hasInvalidInput() {  //не верный ввод данных
        return this._inputList.some((inputElement) => { 
    return !inputElement.validity.valid;
     });
    };

    _toggleButtonState() { //переключает состояние кнопки
      if (this._hasInvalidInput()) { 
        this._buttonElement.classList.add(this._inactiveButtonClass); 
        this._buttonElement.setAttribute("disabled", true); 
      } else { 
        this._buttonElement.classList.remove(this._inactiveButtonClass); 
        this._buttonElement.removeAttribute("disabled"); 
      };
    };
  };
