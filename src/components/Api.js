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
  }

  /**
   * Sends a GET request to the `users/me` endpoint and returns
   * the username and user-about as an object
   * @returns object containing user 'name' and 'about'
   */
  async getUserInformation() {
    const res = await fetch(`${this._options.baseUrl}/users/me`, this._options);
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error <code>: ${res.status}`);
  }

  /**
   *
   * Fetches the /cards endpoint and converts results into
   * an array of the object from the api
   * @returns array of cards to be operated upon from the /cards endpoint
   */
  async getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, this._options)
      .then((res) => {
        if (res.ok) {
          console.log("Initial cards", res);
          return res.json();
        }
        return Promise.reject(`Error <code>: ${res.status}`);
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
    const res = await fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        about: aboutMe,
      }),
    });
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Error code: ${res.status}`);
  }

  /**
   *
   * @param {object} `{cardName, link}`
   * @returns `Promise`
   */
  async createCard({ cardName, link }) {
    const res = await fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardName,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Error code: ${res.status}`);
      }
    });
  }

  // async deleteCard(){
  //   const res = {
  //     method: "DELETE",
  //     headers: {
  //       authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
  //       "Content-Type": "application/json"
  //     }
  //   }
  //   if(res.ok) {
  //     return res.json();
  //   }

  // }

  // renderCards() {
  //   return Promise.all(/*cards to render, array of fn calls for getting user information*/);
  // }
}
