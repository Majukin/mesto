const openPopupButton = document.querySelector('.profile__info-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__container-close');

function popupOpenToggle() {
  popup.classList.toggle('popup_opened')
}

function popupOverlayClose(evt) {
  if (evt.target === evt.currentTarget) {
    popupOpenToggle();
  }
}

openPopupButton.addEventListener('click', popupOpenToggle);
closePopupButton.addEventListener('click', popupOpenToggle);
popup.addEventListener('click', popupOverlayClose);



// Находим форму в DOM
let formElement = document.querySelector('.popup__container-form');
  // Находим поля формы в DOM
let nameInput = document.querySelector('.popup__container-form-name');
let jobInput = document.querySelector('.popup__container-form-job');
let profileInfoTitle = document.querySelector('.profile__info-title');
let profileInfoSubtitle = document.querySelector('.profile__info-subtitle');

    // Обработчик «отправки» формы, хотя пока
    // она никуда отправляться не будет
    function formSubmitHandler(evt) {
      evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
      // Так мы можем определить свою логику отправки.
      // О том, как это делать, расскажем позже.
      nameInput.value = profileInfoTitle.textContent;
      jobInput.value = profileInfoSubtitle.textContent;
      // Получите значение полей jobInput и nameInput из свойства value

      // Выберите элементы, куда должны быть вставлены значения полей

      // Вставьте новые значения с помощью textContent
    }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 