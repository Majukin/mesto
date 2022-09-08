import './index.css';

import {settings, 
  buttonOpenPopupEdit, 
  buttonOpenPopupAdd,
  popupFormAdd,
  popupFormEdit,
  popupFormAvatarImage,
  ProfileInputs,
  buttonOpenPopupAvatar} from "../utils/constants.js";

import{Api} from '../components/Api.js';
import{Card} from '../components/Card.js';
import{FormValidator} from '../components/FormValidator.js';
import{Section} from '../components/Section.js';
import{PopupWithForm} from '../components/PopupWithForm.js';
import{PopupWithImage} from '../components/PopupWithImage.js';
import{PopupWithConfirm} from '../components/PopupWithConfirm.js';
import{UserInfo} from '../components/UserInfo.js';

const api = new Api({ 
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
  headers: {
    authorization: 'e39f8c18-81f2-4cd1-bc1e-98d190fc1e14',
    'Content-Type': 'application/json'
  }
}); 

//создание новой карточки
function createCard(item, id) {
  const cardElement = new Card({
      data: item,
      handleCardClick,
      handleTrashClick,
      handleLikeClick,
    }, "#element-template", id).generateCard();
  return cardElement;
}

//добавление карточек из массива 
const cardList = new Section({
    renderer: (Item, id) => {
      cardList.addItem(createCard(Item, id));
    },
  },
 ".elements"
);

//функция открытия попап-картинки 
function handleCardClick(title, link) {
  popupWithImage.open(title, link);
}

const popupWithImage = new PopupWithImage('#popup_image');
popupWithImage.setEventListeners();

// редактирование профиля
function handlePopupProfile(inputsData) {
  popupFormProfile.renderSaving(true);

  api.saveUserChanges(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormProfile.renderSaving(false);
    })
}

//слушатель по кнопке редактирования 
buttonOpenPopupEdit.addEventListener('click', () => {
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
  selectorAvatar: '.profile__avatar-image',
}); 


//добавление новой карточки
function handlePopupAddCard(inputsData) {
  popupFormAddCard.renderSaving(true);

  api.postNewCard(inputsData)
    .then((data) => {
      cardList.addItem(createCard(data, data.owner._id));
      popupFormAddCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormAddCard.renderSaving(false);
    })
}

//слушатель по кнопке добавления 
buttonOpenPopupAdd.addEventListener('click', () => {
  popupFormAddCard.open();
  validationPopupAdd.resetValidation(); 
});

const popupFormAddCard = new PopupWithForm('#popup_add', handlePopupAddCard);
popupFormAddCard.setEventListeners();

//валидация добавленных карточек 
const validationPopupAdd = new FormValidator(settings, popupFormAdd); 
validationPopupAdd.enableValidation(); 







// добавление аватара
function handlePopupChangeAvatar(inputsData) {
  popupFormAvatar.renderSaving(true);

  api.changedAvatar(inputsData)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupFormAvatar.renderSaving(false);
    })
}

//слушатель по кнопке добавления аватара
buttonOpenPopupAvatar.addEventListener('click', () => {
  popupFormAvatar.open();
  validationPopupAvatar.resetValidation(); 
});

const popupFormAvatar = new PopupWithForm('#popup_avatar', handlePopupChangeAvatar);
popupFormAvatar.setEventListeners();


//валидация аватара
const validationPopupAvatar = new FormValidator(settings, popupFormAvatarImage); 
validationPopupAvatar.enableValidation(); 









//подтверждение удаления
function handleTrashClick(id, card) {
  popupWithConfirm.setSubmitAction(() => handlePopupConfirm(id, card))
  popupWithConfirm.open();
}

function handlePopupConfirm(id, card) {
  api.deleteCard(id)
    .then(() => {
      card.removeCard();
      popupWithConfirm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

const popupWithConfirm = new PopupWithConfirm('#popup_delete');
popupWithConfirm.setEventListeners();

// лайк
function handleLikeClick(id, isLiked, card) {
  if (isLiked) {
    api.dislikedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api.likedCard(id)
      .then((data) => {
        card.setLikes(data.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

//передача массива промисов
Promise.all([
    api.getUserData(),
    api.getInitialCards()
  ])
  .then((values) => {
    userInfo.setUserInfo(values[0])
    cardList.renderItems(values[1], values[0]._id);
  })
  .catch((err) => {
    console.log(err);
  });