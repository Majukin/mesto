export class UserInfo {
  constructor({selectorName, selectorInfo}){
    this._elementName = document.querySelector(selectorName);
    this._elementInfo = document.querySelector(selectorInfo);
  };

  getUserInfo() {
    return this._profileData = {
      userName: this._elementName.textContent,
      userJob: this._elementInfo.textContent,
    };
  }
  
  setUserInfo({ userName, userJob }) {
    this._elementName.textContent = userName;
    this._elementInfo.textContent = userJob;
  }
}