import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import Card from "../components/Card.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
import {
  editModalNameInput,
  editModalAboutmeInput,
  editButton,
  addCardButton,
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

// CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS CLASS INITIALISATIONS
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
  handleCardDelete,
  handleCardDeleteListener
);

const profileInfo = new UserInfo(
  ".profile__profile-heading",
  ".profile__subtitle",
  ".profile__avatar"
);

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1/",
  headers: {
    authorization: "37d10eee-d0ba-4e04-840e-0ebf682b3c60",
    "Content-Type": "application/json",
  },
});

api.getUserInformation().then((data) => {
  const userName = data.name;
  const aboutMe = data.about;
  profileInfo.setUserInfo({ userName, aboutMe });
  profileInfo.setAvatar(profileImg, data.avatar);
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
function handleProfileSubmit(data, formElement) {
  console.log(data);
  api
    .editProfile(data)
    .then((res) => {
      profileInfo.setUserInfo(data);
      formElement.reset();
      renderLoading();
    })
    .then((res) => {
      editProfilePopup.close();
    })
    .finally((res) => {
      editProfilePopup.resetButtonText("Save");
    });
}

function handleNewCardSubmit(data, formElement) {
  api
    .createCard(data)
    .then((result) => {
      console.log(result);
      const resultId = result._id;
      renderCard(data, "prepend", resultId);
    })
    .then((res) => {
      addNewCardPopup.close();
      formElement.reset();
    })
    .then((res) => renderLoading())
    .finally((res) => {
      addNewCardPopup.resetButtonText("Create");
    });
}
function handleCardDeleteListener(card) {
  api
    .deleteCard(card.getId())
    .then((res) => {
      renderLoading(".modal__delete-button");
    })
    .finally((res) => {
      deleteCardPopup.close();
      card.removeCard();
      document.querySelector(".modal__delete-button").textContent = "Yes";
    });
}

function handleCardDelete(card) {
  deleteCardPopup.open(card);
}

function handleCardLike(cardId) {
  this._cardLikeButton.classList.toggle("element__like-button_active");
  const element = this._cardElement.querySelector(".element__like-button");
  if (element.classList.contains("element__like-button_active")) {
    api.likeCard(cardId);
  } else {
    api.dislikeCard(cardId);
  }
}

function handleAvatarSubmit(data, formElement) {
  api.avatarChange(data).then((res) => {
    formElement.reset();
    editAvatarPopup.close();
    profileInfo.setAvatar(profileImg, data.avatarLink);
  });
}

/**
 * Renders cards using the given params
 * @param {object} inputs object with 'name' and 'link' properties
 * @param {string} method that takes either 'append' or 'prepend' depending on where the card should go in the DOM
 */
function renderCard(inputs, method = "append", cardId) {
  if (cardId == undefined) {
    cardId = inputs._id;
  }
  const cardClass = new Card(
    { name: inputs.name, link: inputs.link },
    "#add-elements",
    cardId,
    inputs.isLiked,
    handleImageClick,
    handleCardDelete,
    handleCardLike
  );
  section.addItem(cardClass.returnCardElement(), method);
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
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
