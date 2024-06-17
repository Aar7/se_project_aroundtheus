import {
  editModalNameInput,
  editModalAboutmeInput,
  sectionProfileInfoHeading,
  sectionProfileInfoSubtitle,
} from "../utils/constants.js";

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
    console.log(this._aboutMeElement.textContent);
    return userInfo;
  }

  setUserInfo(/*{ name, about }*/) {
    sectionProfileInfoHeading.textContent = editModalNameInput.value;

    sectionProfileInfoSubtitle.textContent = editModalAboutmeInput.value;

    // this._nameElement.textContent = name;
    // this._aboutMeElement.textContent = about;
  }
}
