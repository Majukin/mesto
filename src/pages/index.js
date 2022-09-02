import './index.css';

import {settings, 
  initialCards, 
  buttonOpenPopupEdit, 
  buttonOpenPopupAdd, 
  popupFormAdd,
  popupFormEdit,
  ProfileInputs} from "../utils/constants.js";

import{Card} from '../components/Card.js';
import{FormValidator} from '../components/FormValidator.js';
import{Section} from '../components/Section.js';
import{PopupWithForm} from '../components/PopupWithForm.js';
import{PopupWithImage} from '../components/PopupWithImage.js';
import{UserInfo} from '../components/UserInfo.js';

//создание новой карточки
function createCard(item) {
  const cardElement= new Card(item, '#element-template', handleCardClick).generateCard();
  return cardElement
}

//добавление карточек из массива
const cardList = new Section( 
  {
    items: initialCards,
    renderer: (item) =>{
    cardList.addItem(createCard(item)); 
    }, 
  }, 
  ".elements"
); 
cardList.renderItems(); 

//функция открытия попап-картинки
function handleCardClick(name, link){ 
  popupWithImage.open(name, link);
};

const popupWithImage = new PopupWithImage('#popup_image');//!
popupWithImage.setEventListeners();

// редактирование профиля 
function handlePopupProfile(item) {
	userInfo.setUserInfo(item); 
	popupFormProfile.close();
};

//слушатель по кнопке редактирования
buttonOpenPopupEdit.addEventListener("click", () => {
	popupFormProfile.open();
  validationPopupEdit.resetValidation();
    const userData = userInfo.getUserInfo();
  	ProfileInputs.forEach(input => {
	  input.value = userData[input.name];
	});
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
  cardList.addItem(createCard(item));
  popupFormAddCard.close();
};

//слушатель по кнопке добавления
buttonOpenPopupAdd.addEventListener("click", () => {
  popupFormAddCard.open();
  validationPopupAdd.resetValidation();
});

const popupFormAddCard = new PopupWithForm('#popup_add', handlePopupAddCard);
popupFormAddCard.setEventListeners();

//валидация добавленных карточек 
const validationPopupAdd = new FormValidator(settings, popupFormAdd);
validationPopupAdd.enableValidation();