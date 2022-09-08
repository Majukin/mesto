export class Popup { 
  constructor(popupSelector){ 
    this._popupSelector = popupSelector; 
    this._popupElement = document.querySelector(this._popupSelector); 
    this._buttonClosePopup = this._popupElement.querySelector('.popup__close-button'); 
    this._handleEscClose = this._handleEscClose.bind(this); 
  }; 

  open(){ 
    this._popupElement.classList.add('popup_opened'); 
    document.addEventListener("keydown", this._handleEscClose); 
  }; 

  close(){ 
    this._popupElement.classList.remove('popup_opened');  
    document.removeEventListener("keydown", this._handleEscClose); 
  }; 

  _handleEscClose(evt){ 
    if (evt.key === "Escape") {  
    this.close(); 
    }  
  }; 

  _handleCkickClosePopup(evt) {  
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {  
    this.close(evt.currentTarget);   
    }   
  };   

  setEventListeners(){ 
    this._buttonClosePopup.addEventListener('click', ()=> this.close()); 
    this._popupElement.addEventListener("mousedown", (evt) => this._handleCkickClosePopup(evt)); 
  }; 
}; 