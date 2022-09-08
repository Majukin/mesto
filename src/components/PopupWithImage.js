import {Popup} from './Popup.js';

export class PopupWithImage extends Popup { 
  constructor(popupSelector) { 
    super(popupSelector); 
    this._popupImageCard = this._popupElement.querySelector('.popup__image'); 
    this._popupImageTitleCard =  this._popupElement.querySelector('.popup__image-title'); 
  }; 

 

  open(name, link) { 
    super.open(); 
  this._popupImageCard.src = link;  
  this._popupImageTitleCard.alt = name; 
  this._popupImageTitleCard.textContent = name; 
  }; 
}; 