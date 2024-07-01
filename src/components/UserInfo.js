export default class UserInfo {
  constructor(nameSelector, aboutMeSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
  }

  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userAbout: this._aboutMeElement.textContent,
    };
    // console.log(this._aboutMeElement.textContent);
    return userInfo;
  }

  setUserInfo({ userName, aboutMe }) {
    this._nameElement.textContent = userName;
    this._aboutMeElement.textContent = aboutMe;
  }
}
