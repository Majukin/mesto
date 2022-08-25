import{Card} from './Сard.js';
import{FormValidator} from './FormValidator.js';

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');  
const formElementEdit = document.querySelector('#popup__form_edit');  
const nameInput = document.querySelector('.popup__input_type_name');  
const jobInput = document.querySelector('.popup__input_type_job');  
const profileTitle = document.querySelector('.profile__title');  
const profileSubtitle = document.querySelector('.profile__subtitle');  
const popup = document.querySelector('.popup');  
const popupEdit = document.querySelector('#popup_edit');  
const popupAdd = document.querySelector('#popup_add');  
export const popupImage = document.querySelector('#popup_image');  
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');  
const buttonClosePopupEdit = document.querySelector('#popup__close-button_edit');  
const buttonClosePopupAdd = document.querySelector('#popup__close-button_add');  
const initialContainer = document.querySelector('.elements');  
const popupFormAdd = document.querySelector('#popup__form_add');  
const popupFormEdit = document.querySelector('#popup__form_edit');  
const placeInput = document.querySelector('.popup__input_type_place');   
const linkInput = document.querySelector('.popup__input_type_link');  
const buttonClosePopupImage = document.querySelector('#popup__close-button_image');  
const popupImageCard = document.querySelector('.popup__image');   
const popupImageTitleCard = document.querySelector('.popup__image-title');  
const buttonElement = document.querySelector('.popup__form-button'); 
const buttonFormAdd = document.querySelector('#popup__form-button_add');

const settings = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__form-button', 
  inactiveButtonClass: 'popup__form-button_invalid', 
  inputErrorClass: 'popup__input_error', 
};  

const validationPopupEdit = new FormValidator(settings, popupFormEdit);
const validationPopupAdd = new FormValidator(settings, popupFormAdd);

validationPopupEdit.enableValidation();
validationPopupAdd.enableValidation();

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

//фукция добавления новой карточки
const addCard =(item) =>{ //фукция добавления новой карточки
  const card = new Card(item, '#element-template', handleOpenPopup).generateCard();
  initialContainer.prepend(card);
}

//добавление карточек из массива
initialCards.reverse().forEach(addCard);

//добавляет событие на сабмит
popupFormAdd.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = {
    name: placeInput.value,
    link: linkInput.value,
  }
  linkInput.value = ''; 
  placeInput.value = ''; 
  addCard(item);
  closePopup(popupAdd);  
});

 function handleOpenPopup(link, name){ 
  openPopup(popupImage);
  popupImageCard.src = name;
  popupImageTitleCard.alt = link;
  popupImageTitleCard.textContent = link;
};
 
// открывает попап  
const openPopup = (popup) => {  
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupOnEsc);
};  

buttonOpenPopupAdd.addEventListener('click', ()=> openPopup(popupAdd));   

// закрывает попап  
const closePopup = (popup) => { 
  popup.classList.remove('popup_opened'); 
  document.removeEventListener("keydown", closePopupOnEsc); 
};  

//закрывает попап 
function handleCkickClosePopup(evt) { 
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-button')) {   
    closePopup(evt.currentTarget);  
  }  
};  

//закрывает попап по esc 
function closePopupOnEsc(evt) { 
  if (evt.key === "Escape") { 
    const openPopupForEsc = document.querySelector(".popup_opened"); 
    closePopup(openPopupForEsc);
  } 
}; 

popupEdit.addEventListener('mousedown', handleCkickClosePopup);  
popupAdd.addEventListener('mousedown', handleCkickClosePopup);   
popupImage.addEventListener('mousedown', handleCkickClosePopup);  

//передает значение PopupEdit
function handleOpenPopupEditForm() { 
  nameInput.value = profileTitle.textContent;   
  jobInput.value = profileSubtitle.textContent;  
  openPopup(popupEdit); 
};  
buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEditForm);

// отправляет форму редактирования профиля 
function handleSubmitFormEdit(evt) {  
  evt.preventDefault();   
  profileTitle.textContent = nameInput.value;  
  profileSubtitle.textContent = jobInput.value;  
  closePopup(popupEdit); 
};  
formElementEdit.addEventListener('submit', handleSubmitFormEdit);
   