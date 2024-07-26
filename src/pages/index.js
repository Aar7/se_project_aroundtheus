import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import profileImgSrc from "../images/jacques-cousteau.jpg";
import Card from "../components/Card.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
import {
  editModalNameInput,
  editModalAboutmeInput,
  editButton,
  addCardButton,
  deleteConfirmButton,
  editAvatarButton,
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
const cardDeleteConfirmButton = document.querySelector(".modal__delete-button");
const popupImage = new PopupWithImage("#open-card-modal");
popupImage.setEventListeners();

const editProfilePopup = new PopupWithForm("#edit-modal", handleProfileSubmit);
const addNewCardPopup = new PopupWithForm(
  "#add-card-modal",
  handleNewCardSubmit
);
const editAvatarPopup = new PopupWithForm(
  "#avatar-change-modal",
  handleAvatarSubmit
);
const deleteCardPopup = new PopupWithDelete(
  "#delete-card-modal",
  handleCardDelete
);

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
function renderLoading(buttonElementId = ".modal__save") {
  document.querySelector(buttonElementId).textContent = "Saving...";
}
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
  api
    .editProfile(data)
    .then((res) => {
      renderLoading();
    })
    .finally((res) => {
      editProfilePopup.close();
    });
  // editProfilePopup.close();
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
  // const cardObject = api.createCard(data);
  api
    .createCard(data)
    .then((result) => {
      console.log("result._id", result._id);
      renderCard(data, "prepend", result._id);
    })
    .then((res) => renderLoading())
    .finally((res) => {
      addNewCardPopup.close();
    });
}

function handleCardDelete(cardId) {
  deleteCardPopup.open();
  deleteConfirmButton.addEventListener("click", () => {
    // console.log("Logging 'this'");
    // console.log(this);
    // console.log("Logging 'this' complete");
    this._cardElement.remove();
    api
      .deleteCard(cardId)
      .then((res) => {
        renderLoading(".modal__delete-button");
      })
      .finally((res) => {
        deleteCardPopup.close();
      });
  });
}

function handleCardLike(cardId) {
  this._cardLikeButton.classList.toggle("element__like-button_active");
  const element = this._cardElement;
  if (element.classList.contains("element__like-button_active")) {
    api.likeCard(cardId);
  } else {
    api.dislikeCard(cardId);
  }
}

function handleAvatarSubmit(data) {
  api.avatarChange(data);
  editAvatarPopup.close();
}

/**
 * Renders cards using the given params
 * @param {object} inputs object with 'name' and 'link' properties
 * @param {string} method that takes either 'append' or 'prepend' depending on where the card should go in the DOM
 */
function renderCard(inputs, method = "append", cardId) {
  const cardClass = new Card(
    { name: inputs["cardName"], link: inputs["link"] },
    "#add-elements",
    cardId,
    handleImageClick,
    handleCardDelete,
    handleCardLike
  );
  console.log("cardObject:renderCard(): ", cardId);
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

editAvatarButton.addEventListener("click", () => {
  editAvatarPopup.open();
});

// Form 'submit' handlers
editProfilePopup.setEventListeners();
addNewCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();
editAvatarPopup.setEventListeners();
