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
    console.log("res from checkresponse(): ", res);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error. Status:${res.status}`);
  }

  /**
   * Sends a GET request to the `users/me` endpoint and returns
   * the username and user-about as an object
   * @returns object containing user 'name' and 'about'
   */
  async getUserInformation() {
    const res = await fetch(`${this._baseUrl}users/me`, this._options);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error <code>: ${res.status}`);
    }
  }

  /**
   *
   * Fetches the /cards endpoint and converts results into
   * an array of the object from the api
   * @returns array of cards to be operated upon from the /cards endpoint
   */
  async getInitialCards() {
    console.warn("getInitialCards() ran");
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          console.log("Initial cards", res);
          return res.json();
        } else {
          return Promise.reject(`Error <code>: ${res.status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Fetches the `users/me` endpoint and adds the values
   * from the form fields to the API upon successful
   * submission
   */
  async editProfile({ userName, aboutMe }) {
    console.warn("editProfile() ran");
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: aboutMe,
      }),
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error <code>: ${res.status}`);
    }
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
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: name, link: link }),
    })
      .then((res) => {
        console.log("Fetch response:", res); // Log response
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log("Fetch data:", data); // Log data
        return data;
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        throw err;
      });
  }

  async deleteCard(cardId) {
    console.warn("deleteCard() ran");
    const res = fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error <code>: ${res.status}`);
    }
  }

  async likeCard(cardId) {
    console.warn("likeCard() ran");
    const res = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
      body: JSON.stringify({
        _isLiked: true,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error <code>: ${res.status}`);
      }
    });
  }

  async dislikeCard(cardId) {
    console.warn("dislikeCard() ran");
    const res = fetch(`${this._baseUrl}cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error <code>: ${res.status}`);
      }
    });
  }

  async avatarChange(data) {
    console.warn("avatarChange() ran");
    const res = fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error <code>: ${res.status}`);
      }
    });
  }
}
