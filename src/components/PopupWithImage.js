import { modalImage, modalImageTitle } from "../utils/constants.js";
import Popup from "./Popup.js";

// create one instance of this class and call parent's setEventListeners() method
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
    // add image to popup
    //    add image src and alt to popup
    modalImage.src = link;
    modalImage.alt = name;
    // add image description to popup
    modalImageTitle.textContent = name;
    // to be called in image click handler in index.js
    super.open();
  }
}
