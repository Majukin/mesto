import {popupImageCard} from './index.js';
import {popupImageTitleCard} from './index.js';
import {handleOpenPopup} from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleOpenPopup = handleOpenPopup;
  };
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    
    return cardElement;
   };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;

    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
      popupImageCard.src = this._link;
      popupImageCard.alt = this._name;
      popupImageTitleCard.textContent = this._name;
    });
    return this._element;
};

  _setEventListeners() {
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteInitialCard();
    });
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeInitialCard();
    });
  };

  _handleLikeInitialCard() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  };

  _handleDeleteInitialCard(){
    this._element.remove(); 
  };
};
