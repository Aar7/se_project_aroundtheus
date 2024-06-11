import Popup from "./Popup";

// create an instance of this class for each form-containing popup and
//    call setEventListeners()
// handleSubmit -> callback for when "submit" fires on the forms
class PopupWithForm extends Popup {
  constructor(handleSubmit, popupSelector) {}

  _getInputValues() {
    // collect data from input fields and return them as an object
    //    returned object is passed tosubmission handler as an argument
  }

  // overridden from Popup parent class
  setEventListeners() {
    // OVERRIDING CODE
    //    add a 'submit' event listener to the form and call
    //      the super.setEventListeners()
  }
}
