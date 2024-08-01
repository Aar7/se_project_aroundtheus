/**
 * Class that isolates methods dealing with the user
 * information.
 *
 * @method `getUserInfo()` returns and object with name and
 * about from the page
 *
 * @method `setUserInfo()` takes and object with `userName` and
 * `aboutMe` fields, and sets them to the page
 */
export default class UserInfo {
  constructor(nameSelector, aboutMeSelector, avatarSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutMeElement = document.querySelector(aboutMeSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  /**
   *
   * @returns object containing profile name and about
   */
  getUserInfo() {
    const userInfo = {
      userName: this._nameElement.textContent,
      userAbout: this._aboutMeElement.textContent,
    };
    return userInfo;
  }

  setAvatar(avatarLink) {
    this._avatarElement.src = avatarLink;
  }

  /**
   *
   * @param {object} `{userName, aboutMe}`
   */
  setUserInfo({ userName, aboutMe }) {
    this._nameElement.textContent = userName;
    this._aboutMeElement.textContent = aboutMe;
  }
}
