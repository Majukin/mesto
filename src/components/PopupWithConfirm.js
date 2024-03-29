import {Popup} from './Popup.js';

export class PopupWithConfirm extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popupElement.querySelector('.popup__form');
  }

  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback()
    });
  }
}