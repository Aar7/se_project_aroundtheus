import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import profileImgSrc from "../images/jacques-cousteau.jpg";
import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
import {
  initialCards,
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
  ".elements__list"
);
const popupImage = new PopupWithImage("#open-card-modal");
popupImage.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", handleProfileSubmit);
const addNewCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);
const profileInfo = new UserInfo(
  ".profile__profile-heading",
  ".profile__subtitle"
);

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
function handleImageClick(cardImage, cardName) {
  popupImage.open(cardName.textContent, cardImage.src);
}

function handleProfileSubmit(data) {
  profileInfo.setUserInfo(data);
  editProfilePopup.close();
}

function handleNewCardSubmit(data) {
  console.log("ELEMENT ARGUMENT: ", data);
  renderCard(data, "prepend");
  addNewCardPopup.close();
}

// Render cards
function renderCard(card, method = "append") {
  const cardClass = new Card(
    { name: card["cardName"], link: card["link"] },
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

console.log("FormValidators: ", formValidators);
addCardButton.addEventListener("click", () => {
  formValidators.add_card_form.toggleSubmitButtonState();
  addNewCardPopup.open();
});

// Form 'submit' handlers
editProfilePopup.setEventListeners();
addNewCardPopup.setEventListeners();

// Generate preset cards
section.renderItems();
