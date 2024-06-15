import { closeButtons, modalsArray } from "../utils/constants.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
  }

  open() {
    // to be called in pre-existing event handlers in index.js
    document.querySelector(this._popupSelector).classList.add("modal_opened");
    // document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    document
      .querySelector(this._popupSelector)
      .classList.remove("modal_opened");
    // document.removeEventListener("keydown", this._handleEscClose);
    // remove the event listener for 'Esc' key
  }

  _handleEscClose(event) {
    // logic for closing popup via escape key
    if (event.key === "Escape") {
      // this.close();
      const openedModal = document.querySelector(".modal_opened");
      this.close();
    }
  }

  setEventListeners() {
    // add a 'click' event listener to the 'close' icon of the popup
    // console.log("closebuttons", closeButtons);
    // console.log("popupSelector", this._popupSelector);
    const node = document.querySelector(this._popupSelector);
    const button = node.querySelector(".modal__close");

    button.addEventListener("click", () => this.close(node));
    // add an event listener to close the popup when the user
    //    clicks outside the modal

    node.addEventListener("click", (event) => {
      if (event.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
