export const settings = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__form-button', 
  inactiveButtonClass: 'popup__form-button_invalid', 
  inputErrorClass: 'popup__input_error', 
};  

export const initialCards = [  
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

export const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');  
export const buttonOpenPopupAdd = document.querySelector('.profile__add-button');   
export const popupFormAdd = document.querySelector('#popup__form_add');  
export const popupFormEdit = document.querySelector('#popup__form_edit');  