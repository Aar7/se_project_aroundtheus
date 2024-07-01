// auth token: 37d10eee-d0ba-4e04-840e-0ebf682b3c60
export default class Api {
  constructor(options) {
    this._options = options;
  }

  /**
   *
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
   * From Api.js
   *
   * Fetches the /cards endpoint and converts results into
   * an array of the object from the api
   * @returns array of cards to be operated upon
   */
  async getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, this._options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error <code>: ${res.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

  // renderCards() {
  //   return Promise.all(/*cards to render, array of fn calls for getting user information*/);
  // }
}
