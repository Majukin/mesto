export class Card {
  constructor(data, cardSelector, handleOpenPopup) {
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
    this._elementImage = this._element.querySelector('.element__image');
    this._elementLikeButton = this._element.querySelector('.element__like-button');
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;

    return this._element;
};

  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteInitialCard();
    });
    this._elementLikeButton.addEventListener('click', () => {
      this._handleLikeInitialCard();
    });
  };

  _handleLikeInitialCard() {
    this._elementLikeButton.classList.toggle('element__like-button_active');
  };

  _handleDeleteInitialCard(){
    this._element.remove(); 
  };
};
