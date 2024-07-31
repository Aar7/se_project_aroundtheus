import { modalImage, modalImageTitle } from "../utils/constants.js";
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
  }

  /**
   * Opens the image in the respective modal and sets
   * the modal values according to those in
   * card elements
   * @param {*} name Name on the card
   * @param {*} link Link of the image on the card
   */
  open(name, link) {
    modalImage.src = link;
    modalImage.alt = name;
    modalImageTitle.textContent = name;
    super.open();
  }
}
