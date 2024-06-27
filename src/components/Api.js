// auth token: 37d10eee-d0ba-4e04-840e-0ebf682b3c60
const endpoint = "users/me";
export default class Api {
  constructor(options) {
    this._options = options;
  }

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

  async getEndpointTestMethod() {
    return fetch(`${this._options.baseUrl}${endpoint}`, this._options).then(
      (res) => {
        if (res.ok) {
          console.log("RES: ", res);
          return res.json();
        }
        return Promise.reject(`Error <code>: ${res.status}`);
      }
    );
    // .catch((error) => {
    //   console.log(error);
    // });
  }

  renderCards() {
    return Promise.all(/*cards to render, array of fn calls for getting user information*/);
  }
}

// // // // // // // // // // // // // // // // // //
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1/",
  headers: {
    authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
    "Content-Type": "application/json",
  },
});

api
  .getEndpointTestMethod()
  .then((res) => {
    console.log(res.name);
  })
  .catch((error) => console.log(error));
