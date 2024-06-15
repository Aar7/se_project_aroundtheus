import {
  editModalNameInput,
  editModalAboutmeInput,
  sectionProfileInfoHeading,
  sectionProfileInfoSubtitle,
} from "../utils/constants.js";

export default class UserInfo {
  constructor(profileNameSelector, profileAboutMeSelector) {
    this._profileNameSelector = profileNameSelector;
    this._profileAboutMeSelector = profileAboutMeSelector;
  }

  getUserInfo() {
    // returns an object containing user information
    // useful when it's necessary to display information about
    //    the user on the open form
    this._userInputs = {
      userName: sectionProfileInfoHeading.textContent,
      userJob: sectionProfileInfoSubtitle.textContent,
    };
    return this._userInputs;
  }

  setUserInfo() {
    // takes new user data and adds it to the page
    // call after successful form submission
    // this.getUserInfo();
    // console.log(this._userInputs.userName);
    // sectionProfileInfoHeading.textContent = this._userInputs.userName;
    // sectionProfileInfoSubtitle.textContent = this._userInputs.userJob;
    sectionProfileInfoHeading.textContent = editModalNameInput.value;
    sectionProfileInfoSubtitle.textContent = editModalAboutmeInput.value;
  }
}
