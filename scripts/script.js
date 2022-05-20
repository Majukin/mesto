const buttonOpenPopupEdit = document.querySelector('.profile__edit-button'); 
const formElementEdit = document.querySelector('#popup__form_edit'); 
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileTitle = document.querySelector('.profile__title'); 
const profileSubtitle = document.querySelector('.profile__subtitle'); 
const popupName = document.querySelector('.popup'); 
const popupEdit = document.querySelector('#popup_edit'); 
const popupAdd = document.querySelector('#popup_add'); 
const popupImage = document.querySelector('#popup_image'); 
const buttonOpenPopupAdd = document.querySelector('.profile__add-button'); 
const buttonClosePopupEdit = document.querySelector('#popup__close-button_edit'); 
const buttonClosePopupAdd = document.querySelector('#popup__close-button_add'); 
const initialContainer = document.querySelector('.elements'); 
const popupFormAdd = document.querySelector('#popup__form_add'); 
const placeInput = document.querySelector('.popup__input_type_place');  
const linkInput = document.querySelector('.popup__input_type_link'); 
const buttonClosePopupImage = document.querySelector('#popup__close-button_image'); 
const popupImageCard = document.querySelector('.popup__image');  
const popupImageTitleCard = document.querySelector('.popup__image-title'); 
const buttonElement = document.querySelector('.popup__form-button');
const buttonFormAdd = document.querySelector('#popup__form-button_add');

// открывает попап 
const openPopup = (popupName) => { 
  popupName.classList.add('popup_opened'); 
  document.addEventListener("keydown", closePopupEsc);
}; 

function handleOpenPopupEdit() {  
  nameInput.value = profileTitle.textContent;  
  jobInput.value = profileSubtitle.textContent; 
  openPopup(popupEdit); 
}  
buttonOpenPopupEdit.addEventListener('click', handleOpenPopupEdit);  
buttonOpenPopupAdd.addEventListener('click', ()=> openPopup(popupAdd)); 

// закрывает попап 
const closePopup = (popupName) => { 
  popupName.classList.remove('popup_opened'); 
  document.removeEventListener("keydown", closePopupEsc);
}; 
buttonClosePopupEdit.addEventListener('click', ()=> closePopup(popupEdit)); 
buttonClosePopupAdd.addEventListener('click', ()=> closePopup(popupAdd)); 

// передает значение попап редактирования 
function handleSubmitForm(evt) { 
  evt.preventDefault();  
  profileTitle.textContent = nameInput.value; 
  profileSubtitle.textContent = jobInput.value; 
  closePopup(popupEdit); 
} 
formElementEdit.addEventListener('submit', handleSubmitForm);  

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

// шаблоны 
const initialCardTemplate = document.querySelector("#element-template").content.querySelector('.element'); 

// обработчики событий 
const handleSubmitAddInitialForm = (event) => { 
  event.preventDefault(); 
  renderInitialCard({ link: linkInput.value, name: placeInput.value});  
  linkInput.value = '';  
  placeInput.value = '';
  followButtonInactive(buttonFormAdd);
  closePopup(popupAdd); 
} 

const handleDeleteInitialCard = (event) => { 
  event.target.closest('.element').remove(); 
} 

const handleLikeInitialCard = (event) => { 
  event.target.classList.toggle('element__like-button_active'); 
} 

// генерация карточки 
const generateInitialCard = (initialData) => { 
  const newInitialCard = initialCardTemplate.cloneNode(true); 
  const elementTitle = newInitialCard.querySelector('.element__title'); 
  const elementImage = newInitialCard.querySelector('.element__image');  
  elementTitle.textContent = initialData.name; 
  elementImage.alt = initialData.name; 
  elementImage.src = initialData.link; 

  const deliteButton = newInitialCard.querySelector('.element__delete-button'); 
  deliteButton.addEventListener('click', handleDeleteInitialCard); 

  const likeButton = newInitialCard.querySelector('.element__like-button'); 
  likeButton.addEventListener('click', handleLikeInitialCard); 

  elementImage.addEventListener('click', () => handleOpenPopupImage(initialData)); // открывает попап картинки 

  return newInitialCard; 
} 

//Рендер карточки 
const renderInitialCard = (initialData) => { 
  initialContainer.prepend(generateInitialCard(initialData)); 
}; 

initialCards.forEach((initialData) => { 
  renderInitialCard(initialData); 
}); 

popupFormAdd.addEventListener("submit", handleSubmitAddInitialForm); 

function handleOpenPopupImage(initialData) { // открывает попап картинки 
  openPopup(popupImage); 
  popupImageCard.src = initialData.link; 
  popupImageCard.alt = initialData.name; 
  popupImageTitleCard.textContent = initialData.name; 
} 

buttonClosePopupImage.addEventListener('click', ()=> closePopup(popupImage)); // закрывает попап картинки 

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

const objectForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__form-button',
  inactiveButtonClass: 'popup__form-button_invalid',
  inputErrorClass: 'popup__input_error',
}; 
