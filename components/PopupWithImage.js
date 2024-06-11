import Popup from "./Popup";

// create one instance of this class and call parent's setEventListeners() method
class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(/*accept name and link of the card to be added*/) {
    // add image to popup
    // add image src and alt to popup
    // add image description to popup
    // to be called in image click handler in index.js
    super.open();
  }
}
