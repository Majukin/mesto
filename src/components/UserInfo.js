export class UserInfo {
  constructor({selectorName, selectorInfo}){
    this._elementName = document.querySelector(selectorName);
    this._elementInfo = document.querySelector(selectorInfo);
    this._nameInput = document.querySelector('.popup__input_type_name');
    this._jobInput = document.querySelector('.popup__input_type_job'); 
  };

  getUserInfo() {
    this._nameInput.value = this._elementName.textContent,
    this._jobInput.value = this._elementInfo.textContent
  };
  
  setUserInfo() {
    this._elementName.textContent = this._nameInput.value,
    this._elementInfo.textContent = this._jobInput.value
  };
};