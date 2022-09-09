export class Card { 
  constructor({data, handleCardClick, handleTrashClick, handleLikeClick}, cardSelector, userId) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._idOwner = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elemenImageTitle = this._element.querySelector('.element__title');
    this._elementImage = this._element.querySelector('.element__image');
    this._delete = this._element.querySelector('.element__delete-button');
    this._like = this._element.querySelector('.element__like-button');
    this._likeCounter = this._element.querySelector('.element__like-counter');
    this._elementImage.src = this._link;
    this._elementImage.alt = `Фото ${this._name}`;
    this._elemenImageTitle.textContent = this._name;
    this.setLikes(this._likes);
  
    if (this._userId !== this._idOwner) {
      this._delete.remove();
    }

    this._setEventListeners();
    return this._element;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _checkLike() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  }

  setLikes(arr) {
    this._likeCounter.textContent = arr.length;
    this._likes = arr;
    if (this._checkLike()) {
      this._like.classList.add('element__like-button_active');
    } else {
      this._like.classList.remove('element__like-button_active');
    }
  } 
  
  _setEventListeners() {
    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    this._delete.addEventListener('click', () => {
      this._handleTrashClick(this._cardId, this);
    });

    this._like.addEventListener('click', () => {
      this._handleLikeClick(this._cardId, this._checkLike(), this);
    });
  }
} 