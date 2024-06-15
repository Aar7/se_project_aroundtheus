import { modalImage, modalImageTitle } from "../utils/constants.js";
import Popup from "./Popup.js";

// create one instance of this class and call parent's setEventListeners() method
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open(name, link) {
    // add image to popup
    //    add image src and alt to popup
    modalImage.src = link;
    modalImage.alt = name;
    // add image description to popup
    modalImageTitle.textContent = name;
    // to be called in image click handler in index.js

    document.addEventListener("keydown", this._handleEscClose);
    super.open();
  }
}