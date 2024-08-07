// auth token: 37d10eee-d0ba-4e04-840e-0ebf682b3c60
/**
 * Class that deals with interactions with the API.
 * Anything that affects the content of the page
 * should be reflected with a request to the API,
 * and the functionality of this class reflects that.
 */
export default class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error. Status: ${res.status}`);
    }
  }

  logError(error) {
    console.error(error);
  }

  /**
   * Sends a GET request to the `users/me` endpoint and returns
   * the username and user-about as an object
   * @returns object containing user 'name' and 'about'
   */
  async getUserInformation() {
    return fetch(`${this._baseUrl}users/me`, this._options).then(
      this._checkResponse
    );
  }

  /**
   *
   * Fetches the /cards endpoint and converts results into
   * an array of the object from the api
   * @returns array of cards to be operated upon from the /cards endpoint
   */
  async getInitialCards() {
    console.warn("getInitialCards() ran");
    return fetch(`${this._baseUrl}cards`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  /**
   * Fetches the `users/me` endpoint and adds the values
   * from the form fields to the API upon successful
   * submission
   */
  async editProfile({ userName, aboutMe }) {
    console.warn("editProfile() ran");
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: aboutMe,
      }),
    }).then(this._checkResponse);
  }

  /**
   * Sends a POST request to the server with the card
   * name and link to the photo, adding it to the array
   * of card-objects on the server.
   * @param {object} `{cardName, link}`
   * @returns `Promise`
   */
  async createCard({ name, link }) {
    console.warn("createCard() ran");
    console.log("name", name);
    console.log("link", link);
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: name, link: link }),
    })
      .then(this._checkResponse)
      .then((data) => {
        console.log("Fetch data:", data); // Log data
        return data;
      });
  }

  async deleteCard(cardId) {
    console.warn("deleteCard() ran");
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  async likeCard(cardId) {
    console.warn("likeCard() ran");
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        _isLiked: true,
      }),
    }).then(this._checkResponse);
  }

  async dislikeCard(cardId) {
    console.warn("dislikeCard() ran");
    return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  async avatarChange(data) {
    console.warn("avatarChange() ran");
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
      }),
    }).then(this._checkResponse);
  }
}
