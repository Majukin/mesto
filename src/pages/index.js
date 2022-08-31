import './index.css';

import {settings, 
  initialCards, 
  buttonOpenPopupEdit, 
  buttonOpenPopupAdd, 
  popupFormAdd,
  popupFormEdit} from "../utils/constants.js";

import{Card} from '../components/Card.js';
import{FormValidator} from '../components/FormValidator.js';
import{Section} from '../components/Section.js';
import{PopupWithForm} from '../components/PopupWithForm.js';
import{PopupWithImage} from '../components/PopupWithImage.js';
import{UserInfo} from '../components/UserInfo.js';

/* import active from '../images/active.svg';
import button_delete from '../images/button_delete.svg';
import Close_Icon from '../images/Close_Icon.svg';
import disabled from '../images/disabled.svg';
import dombay from '../images/dombay.png';
import elbrus from '../images/elbrus.png';
import Group from '../images/Group.svg';
import img1 from '../images/img1.svg';
import img2 from '../images/img2.svg';
import img2 from '../images/img2.svg';
import Jacques from '../images/Jacques.jpg';
import Karachaevsk from '../images/Karachaevsk.jpg';
import logo from '../images/logo.svg'; */

//добавление карточек из массива
const cardList = new Section( 
  {
    items: initialCards,
    renderer: (item) =>{
  const card = new Card(item, '#element-template', handleCardClick).generateCard();
  cardList.addItem(card);
    },
  },
  ".elements"
);
cardList.renderItems();

//функция открытия попап-картинки
function handleCardClick(name, link){ 
  popupWithImage.open(name, link);
};

const popupWithImage = new PopupWithImage('#popup_image');
popupWithImage.setEventListeners();

// редактирование профиля
function handlePopupProfile(item) {
	userInfo.setUserInfo(item); 
	popupFormProfile.close();
};

//слушатель по кнопке редактирования
buttonOpenPopupEdit.addEventListener("click", () => {
	popupFormProfile.open(userInfo.getUserInfo());
});

const popupFormProfile = new PopupWithForm('#popup_edit', handlePopupProfile);
popupFormProfile.setEventListeners();

//валидация редактирования
const validationPopupEdit = new FormValidator(settings, popupFormEdit);
validationPopupEdit.enableValidation();

const userInfo = new UserInfo({
  selectorName: '.profile__title',
  selectorInfo: '.profile__subtitle',
});

//добавление новой карточки
function handlePopupAddCard(item) {
  const newCard = new Card(item, '#element-template', handleCardClick).generateCard();  
  cardList.addItem(newCard);
  popupFormAddCard.close();
};

//слушатель по кнопке добавления
buttonOpenPopupAdd.addEventListener("click", () => {
  popupFormAddCard.open();
});

const popupFormAddCard = new PopupWithForm('#popup_add', handlePopupAddCard);
popupFormAddCard.setEventListeners();

//валидация добавленных карточек
const validationPopupAdd = new FormValidator(settings, popupFormAdd);
validationPopupAdd.enableValidation();