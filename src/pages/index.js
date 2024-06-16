import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import profileImgSrc from "../images/jacques-cousteau.jpg";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
import {
  initialCards,
  elementsList,
  editModalNameInput,
  editModalAboutmeInput,
  editButton,
  addCardButton,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const headerImg = document.getElementById("header-image");
headerImg.src = headerImgSrc;
const profileImg = document.getElementById("profile-image");
profileImg.src = profileImgSrc;

// CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS
const section = new Section(
  { items: initialCards, renderer: renderCard },
  ".element"
);
const popupImage = new PopupWithImage("#open-card-modal");
popupImage.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", handleProfileSubmit);
const addNewCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);
const profileInfo = new UserInfo(editModalNameInput, editModalAboutmeInput);

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
function handleImageClick(cardImage, cardName) {
  popupImage.open(cardName.textContent, cardImage.src);
}

function handleProfileSubmit(event) {
  event.preventDefault();
  profileInfo.setUserInfo();
  editProfilePopup.close();
}

function handleNewCardSubmit(event) {
  section.addItem(event);
  addNewCardPopup.close();
}

// Render cards
function renderCard(card, method = "append") {
  const cardElement = new Card(card, "#add-elements", handleImageClick);
  elementsList[method](cardElement.returnCardElement());
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
// Click 'edit' button
editButton.addEventListener("click", () => {
  editModalNameInput.value = profileInfo.getUserInfo().userName;
  editModalAboutmeInput.value = profileInfo.getUserInfo().userJob;
  editProfilePopup.open();
  formValidators.edit_profile_form.resetValidation();
});

addCardButton.addEventListener("click", () => {
  formValidators.add_card_form.toggleSubmitButtonState();
  addNewCardPopup.open();
});

// Click 'save' button in edit modal
editProfilePopup.setEventListeners();

// Click 'create' button in add-card modal
addNewCardPopup.setEventListeners();

section.renderItems();
