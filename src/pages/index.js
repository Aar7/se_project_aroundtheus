import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import profileImgSrc from "../images/jacques-cousteau.jpg";
import Card from "../components/Card.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
import {
  initialCards,
  editModalNameInput,
  editModalAboutmeInput,
  editButton,
  addCardButton,
  deleteCardButton,
  sectionProfileInfoHeading,
  sectionProfileInfoSubtitle,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithDelete from "../components/PopupWithDelete.js";

const headerImg = document.getElementById("header-image");
headerImg.src = headerImgSrc;
const profileImg = document.getElementById("profile-image");
profileImg.src = profileImgSrc;

// CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS
// const section = new Section(
//   { items: initialCards, renderer: renderCard },
//   ".elements__list"
// );
const popupImage = new PopupWithImage("#open-card-modal");
popupImage.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", handleProfileSubmit);
const addNewCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);
// const deleteCardPopup = new PopupWithDelete("#delete-card-modal");
const profileInfo = new UserInfo(
  ".profile__profile-heading",
  ".profile__subtitle"
);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1/",
  headers: {
    authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
    "Content-Type": "application/json",
  },
});

api.getUserInformation().then((data) => {
  sectionProfileInfoHeading.textContent = data.name;
  sectionProfileInfoSubtitle.textContent = data.about;
});

let section;
api.getInitialCards().then((cards) => {
  section = new Section(
    { items: cards, renderer: renderCard },
    ".elements__list"
  );
  section.renderItems();
});

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
/**
 * Opens the image preview modal
 * @param {DOM Element} cardImage the DOM Element with the card's image
 * @param {DOM Element} cardName the DOM Element with the card's title/name
 */
function handleImageClick(cardImage, cardName) {
  popupImage.open(cardName.textContent, cardImage.src);
}

/**
 * Sets the submitted information to the page profile section
 * and sends the data through the API class to the server
 * @param {Array} data
 */
function handleProfileSubmit(data) {
  console.log("Profile Submit data: ", data);
  profileInfo.setUserInfo(data);
  api.editProfile(data);
  editProfilePopup.close();
}

function handleNewCardSubmit(data) {
  /*
    Assign api.createCard(data) to a variable which
    will store the returned object from the server
    after the card is created.
    Then, pass the _id field to the renderCard function call.
    (Need to redefine the function to enable handling
    of this new parameter, which is useful in deleting and
    referencing the card)
  */
  console.log("ELEMENT ARGUMENT: ", data);
  const cardObject = api.createCard(data);
  console.log("cardObject", cardObject);
  renderCard(data, "prepend");
  addNewCardPopup.close();
}

function handleCardDelete(cardId) {
  // delete card from the DOM
  // delete card from the server
}

/**
 * Renders cards using the given params
 * @param {object} inputs object with 'name' and 'link' properties
 * @param {string} method that takes either 'append' or 'prepend' depending on where the card should go in the DOM
 */
function renderCard(inputs, method = "append") {
  const cardClass = new Card(
    { name: inputs["cardName"], link: inputs["link"] },
    "#add-elements",
    handleImageClick
  );
  section.addItem(cardClass.returnCardElement(), method);
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
// Click 'edit' button
editButton.addEventListener("click", () => {
  const { userName, userAbout } = profileInfo.getUserInfo();
  editModalNameInput.value = userName;
  editModalAboutmeInput.value = userAbout;
  editProfilePopup.open();
  formValidators.edit_profile_form.resetValidation();
});

addCardButton.addEventListener("click", () => {
  formValidators.add_card_form.toggleSubmitButtonState();
  addNewCardPopup.open();
});

// deleteCardButton.addEventListener("click", )

// Form 'submit' handlers
editProfilePopup.setEventListeners();
addNewCardPopup.setEventListeners();
// deleteCardPopup.setEventListeners();

// Generate preset cards
// section.renderItems();
// section.renderItems(api.getInitialCards());
