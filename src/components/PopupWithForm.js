import {Popup} from './Popup.js';

export class PopupWithForm extends Popup { 
  constructor(popupSelector, handleSubmit) { 
    super(popupSelector); 
    this._popupSelector = popupSelector; 
    this._handleSubmit = handleSubmit; 
    this._popupForm = this._popupElement.querySelector(".popup__form"); 
    this._inputList = this._popupElement.querySelectorAll(".popup__input"); 
    this._buttonForm = this._popupForm.querySelector('.popup__form-button');
    this._textButtonForm = this._buttonForm.textContent;
  }; 
  renderSaving(status){
    if(status){
      this._buttonForm.textContent = `Cохранение...`;
    } else {
      this._buttonForm.textContent = this._textButtonForm;
    }
  }
  _getInputValues() { 
    this._formValues = {}; 
    this._inputList.forEach(input => { 
      this._formValues[input.name] = input.value; 
    }); 

    return this._formValues; 
  }; 

  setEventListeners() { 
    super.setEventListeners(); 
    this._popupForm.addEventListener("submit", (e) => { 
      e.preventDefault(); 
      this._handleSubmit(this._getInputValues()); 
    }); 
  }; 

  close() { 
    super.close(); 
    this._popupForm.reset(); 
  }; 
}; 