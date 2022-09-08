export const settings = { 
  formSelector: '.popup__form', 
  inputSelector: '.popup__input', 
  submitButtonSelector: '.popup__form-button', 
  inactiveButtonClass: 'popup__form-button_invalid', 
  inputErrorClass: 'popup__input_error', 
};  

export const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');  
export const buttonOpenPopupAdd = document.querySelector('.profile__add-button'); 
export const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-button'); 
export const popupFormAdd = document.querySelector('#popup__form_add');  
export const popupFormEdit = document.querySelector('#popup__form_edit'); 
export const popupFormAvatarImage =  document.querySelector('#popup__form_avatar'); 
const Profile = document.querySelector('#popup_edit');
export const ProfileInputs = Profile.querySelectorAll('.popup__input');
export const cardTemplateSelector = document.querySelector('#element-template');