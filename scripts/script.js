// открывает попап редактирования
const openPopupButtonEdit = document.querySelector('.profile__edit-button');
const closeInfoButonEdit = document.querySelector('.popup__form-button');
const popupEdit = document.querySelector('#popup_edit');
function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}
openPopupButtonEdit.addEventListener('click', openPopupEdit);

// закрывает попап редактирования
const closePopupButtonEdit = document.querySelector('#popup__close-button_edit');
function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}
closePopupButtonEdit.addEventListener('click', closePopupEdit);

// передает значение попап редактирования
const formElementEdit = document.querySelector('#popup__form_edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
function formSubmitHandler(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopupEdit();
}
formElementEdit.addEventListener('submit', formSubmitHandler); 

// открывает попап добавления
const openPopupButtonAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('#popup_add');
function openPopupAdd() {
  popupAdd.classList.add('popup_opened');
}
openPopupButtonAdd.addEventListener('click', openPopupAdd);

// закрывает попап добавления
const closePopupButtonAdd = document.querySelector('#popup__close-button_add');
function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}
closePopupButtonAdd.addEventListener('click', closePopupAdd);

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

// элементы
const initialContainer = document.querySelector('.elements');
const popupFormAdd = document.querySelector('#popup__form_add');
const placeInput = document.querySelector('.popup__input_type_place'); 
const linkInput = document.querySelector('.popup__input_type_link');
const openPopupImage = document.querySelector('#popup_image');

// обработчики событий
const handleSubmitAddInitialForm = (event) => {
  event.preventDefault();
  renderInitialCard({ link: linkInput.value, name: placeInput.value}); 
  linkInput.value = ''; 
  placeInput.value = ''; 
}

const handleDeleteInitialCard = (event) => {
  event.target.closest('.element').remove();
}

const handleLikeInitialCard = (event) => {
  event.target.closest('.element__like-button').classList.toggle('element__like-button_active');
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

  elementImage.addEventListener('click', () => handleOpenPopupImage(initialData)); // клик для открытия попап картинки
  
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

const popupImage = document.querySelector('.popup__image'); 
const popupImageTitle = document.querySelector('.popup__image-title');

function handleOpenPopupImage(initialData) { // открывает попап картинки
  openPopupImage.classList.add('popup_opened');
  popupImage.src = initialData.link;
  popupImageTitle.textContent = initialData.name;
}

const closeButtonPopupImage = document.querySelector('#popup__close-button_image');
const handleClosePopupImage = (event) => {//закрывает попап картинки
  event.target.closest('#popup_image').remove();
} 

closeButtonPopupImage.addEventListener('click', handleClosePopupImage);