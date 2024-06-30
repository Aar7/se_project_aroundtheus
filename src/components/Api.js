// auth token: 37d10eee-d0ba-4e04-840e-0ebf682b3c60
export default class Api {
  constructor(options) {
    this._options = options;
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

  async getUserInformation() {
    return fetch(`${this._options.baseUrl}/users`, this._options)
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

  // async getEndpointTestMethod() {
  //   return fetch(`${this._options.baseUrl}`, this._options).then(
  //     (res) => {
  //       if (res.ok) {
  //         // console.log("RES: ", res);
  //         return res.json();
  //       }
  //       return Promise.reject(`Error <code>: ${res.status}`);
  //     }
  //   );
  //   // .catch((error) => {
  //   //   console.log(error);
  //   // });
  // }

  renderCards() {
    return Promise.all(/*cards to render, array of fn calls for getting user information*/);
  }
}
