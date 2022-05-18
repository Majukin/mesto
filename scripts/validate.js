//слуштели
name.addEventListener('input', handleValidate);
job.addEventListener('input', handleValidate);
place.addEventListener('input', handleValidate);
link.addEventListener('input', handleValidate);

//функции
function handleValidate(event) {
  deActivateError(event.target);
  validate(event.target);
}

function validate(element) {
  console.log(element.checkValidity());
  const errorElement = document.querySelector(`#error-${element.id}`);
  if(!element.checkValidity()){
  errorElement.textContent = element.validationMessage;
  activateError(errorElement);
 }
}

function activateError(element) {
  element.parentNode.classList.add('popup__input-container_invalid');
  submitFormAdd.classList.add('popup__form-button_invalid');
  submitFormEdit.classList.add('popup__form-button_invalid');
  submitFormAdd.disabled = true;
  submitFormEdit.disabled = true;
}

function deActivateError(element) {
  element.parentNode.classList.remove('popup__input-container_invalid');
  submitFormAdd.classList.remove('popup__form-button_invalid');
  submitFormEdit.classList.remove('popup__form-button_invalid');
  submitFormAdd.disabled = false;
  submitFormEdit.disabled = false;
}