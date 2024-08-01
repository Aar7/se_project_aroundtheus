import Popup from "./Popup.js";

/**
 * Child of Popup class
 *
 * Method `open(name, link)` sets information on the
 * image-open modal and opens that modal
 */
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._openCardModal = document.querySelector("#open-card-modal");
    this._modalImage = this._openCardModal.querySelector(".modal__image");
    this._modalImageTitle = this._openCardModal.querySelector(
      ".modal__image-title"
    );
  }

  /**
   * Opens the image in the respective modal and sets
   * the modal values according to those in
   * card elements
   * @param {*} name Name on the card
   * @param {*} link Link of the image on the card
   */
  open(name, link) {
    this._modalImage.src = link;
    this._modalImage.alt = name;
    this._modalImageTitle.textContent = name;
    super.open();
  }
}
