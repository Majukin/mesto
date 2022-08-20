import{Card} from './Сard.js';
import{FormValidator} from './FormValidator.js';

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');  
const formElementEdit = document.querySelector('#popup__form_edit');  
const nameInput = document.querySelector('.popup__input_type_name');  
const jobInput = document.querySelector('.popup__input_type_job');  
const profileTitle = document.querySelector('.profile__title');  
const profileSubtitle = document.querySelector('.profile__subtitle');  
const popupName = document.querySelector('.popup');  
const popupEdit = document.querySelector('#popup_edit');  
const popupAdd = document.querySelector('#popup_add');  
export const popupImage = document.querySelector('#popup_image');  
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');  
const buttonClosePopupEdit = document.querySelector('#popup__close-button_edit');  
const buttonClosePopupAdd = document.querySelector('#popup__close-button_add');  
const initialContainer = document.querySelector('.elements');  
const popupFormAdd = document.querySelector('#popup__form_add');  
const placeInput = document.querySelector('.popup__input_type_place');   
const linkInput = document.querySelector('.popup__input_type_link');  
const buttonClosePopupImage = document.querySelector('#popup__close-button_image');  
export const popupImageCard = document.querySelector('.popup__image');   
export const popupImageTitleCard = document.querySelector('.popup__image-title');  
const buttonElement = document.querySelector('.popup__form-button'); 
const buttonFormAdd = document.querySelector('#popup__form-button_add');


const settings = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__form-button', 
  inactiveButtonClass: 'popup__form-button_invalid', 
  inputErrorClass: 'popup__input_error', 
};  

export const validationPopapEdit = new FormValidator(settings, '#popup__form-button_edit').enableValidation();
export const validationPopapAdd = new FormValidator(settings, '#popup__form-button_add').enableValidation();


const initialCards = [  
  {  
    name: 'Архыз',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'  
  },  
  {  
    name: 'Челябинская область',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'  
  },  
  {  
    name: 'Иваново',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'  
  },  
  {  
    name: 'Камчатка',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'  
  },  
  {  
    name: 'Холмогорский район',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'  
  },  
  {  
    name: 'Байкал',  
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'  
  }  
];   

initialCards.forEach((item) => { //добавление карточек из массива
  const card = new Card(item, '#element-template');
  const cardElement = card.generateCard();

  document.querySelector('.elements').append(cardElement);
});

const addCard =(item) =>{ //фукция добавления новой карточки
   const card = new Card(item, '#element-template').generateCard();
   document.querySelector('.elements').prepend(card);
}

popupFormAdd.addEventListener('submit', (e) => {//добавляет событие на сабмит
  e.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  }
  linkInput.value = '';
  placeInput.value = '';
  addCard(item);
  closePopup(popupAdd);  
})

// открывает попап  
export const openPopup = (popupName) => {  
  popupName.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupEsc);
};  

buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);   
buttonOpenPopupAdd.addEventListener('click', ()=> openPopup(popupAdd));  

// закрывает попап  
const closePopup = (popupName) => { 
  popupName.classList.remove('popup_opened'); 
  document.removeEventListener("keydown", closePopupEsc); 
};  

buttonClosePopupEdit.addEventListener('click', ()=> closePopup(popupEdit));  
buttonClosePopupAdd.addEventListener('click', ()=> closePopup(popupAdd));  

//передает значение PopupEdit
function handleOpenPopupEdit() { 
  nameInput.value = profileTitle.textContent;   
  jobInput.value = profileSubtitle.textContent;  
  openPopup(popupEdit); 
}   

//закрывает попап по оверлэй 
function closePopupOverlay(evt) { 
if (evt.target === evt.currentTarget) {   
  closePopup(popupEdit); 
  closePopup(popupAdd); 
  closePopup(popupImage); 
  }  
}   

popupEdit.addEventListener('mousedown', closePopupOverlay);  
popupAdd.addEventListener('mousedown', closePopupOverlay);   
popupImage.addEventListener('mousedown', closePopupOverlay);  

//закрывает попап по esc 
function closePopupEsc(evt) { 
  if (evt.key === "Escape") { 
   const openPopupForEsc = document.querySelector(".popup_opened"); 
    closePopup(openPopupForEsc);
  } 
} 

// отправляет форму редактирования профиля 
function handleSubmitForm(evt) {  
  evt.preventDefault();   
  profileTitle.textContent = nameInput.value;  
  profileSubtitle.textContent = jobInput.value;  
  closePopup(popupEdit); 
}  

formElementEdit.addEventListener('submit', handleSubmitForm);   

buttonClosePopupImage.addEventListener('click', ()=> closePopup(popupImage)); 


















