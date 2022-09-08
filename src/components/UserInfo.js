export class UserInfo { 
  constructor({selectorName, selectorInfo, selectorAvatar}){ 
    this._elementName = document.querySelector(selectorName); 
    this._elementInfo = document.querySelector(selectorInfo); 
    this._avatar = document.querySelector(selectorAvatar);
  }; 

  getUserInfo() {
    return this._profileData = {
      name: this._elementName.textContent, 
      about: this._elementInfo.textContent, 
    };
  }
  
  setUserInfo({ name, about, avatar }) {
    this._elementName.textContent = name; 
    this._elementInfo.textContent = about;
    this._avatar.src = avatar;
  }
}