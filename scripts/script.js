const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('#popup_edit');
const formElementEdit = document.querySelector('#popup__form_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popup = document.querySelector('.popup');
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup_add');
const buttonClosePopupEdit = document.querySelector('#popup__close-button_edit');
const buttonClosePopupAdd = document.querySelector('#popup__close-button_add');

const initialContainer = document.querySelector('.elements');
const popupFormAdd = document.querySelector('#popup__form_add');
const placeInput = document.querySelector('.popup__input_type_place'); 
const linkInput = document.querySelector('.popup__input_type_link');

const popupImage = document.querySelector('#popup_image');
const buttonClosePopupImage = document.querySelector('#popup__close-button_image');
const popupImageCard = document.querySelector('.popup__image'); 
const popupImageTitleCard = document.querySelector('.popup__image-title');

nameInput.value = profileTitle.textContent;
jobInput.value = profileSubtitle.textContent;

// открывает попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};
buttonOpenPopupEdit.addEventListener('click', ()=> openPopup(popupEdit));
buttonOpenPopupAdd.addEventListener('click', ()=> openPopup(popupAdd)); 

// закрывает попап
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};
buttonClosePopupEdit.addEventListener('click', ()=> closePopup(popupEdit));
buttonClosePopupAdd.addEventListener('click', ()=> closePopup(popupAdd));


// передает значение попап редактирования
function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupEdit();
}
formElementEdit.addEventListener('submit', formSubmitHandler); 

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
  closePopupAdd();
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
  popupImage.classList.add('popup_opened');
  popupImageCard.src = initialData.link;
  popupImageCard.alt = initialData.name;
  popupImageTitleCard.textContent = initialData.name;
}

buttonClosePopupImage.addEventListener('click', ()=> closePopup(popupImage)); // закрывает попап картинки