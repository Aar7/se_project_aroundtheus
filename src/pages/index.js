import "./index.css";
import headerImgSrc from "../images/header-image.svg";
import profileImgSrc from "../images/jacques-cousteau.jpg";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { formValidators } from "../scripts/validation.js";
import Section from "../components/Section.js";
// import * as domElement from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const headerImg = document.getElementById("header-image");
const profileImg = document.getElementById("profile-image");
headerImg.src = headerImgSrc;
profileImg.src = profileImgSrc;
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// // NODES NODES NODES NODES
const elementsList = document.querySelector(".elements__list");

// modal nodes
// const modals = document.querySelectorAll(".modal");
// const modalsArray = Array.from(modals);
// const editProfileModal = document.querySelector("#edit-modal");
// const addCardModal = document.querySelector("#add-card-modal");
// const openCardModal = document.querySelector("#open-card-modal");
// const modalImage = openCardModal.querySelector(".modal__image");
// const modalImageTitle = openCardModal.querySelector(".modal__image-title");

// form nodes
const editProfileForm = document.forms["edit-profile-form"];
// const addCardForm = document.forms["add-card-form"];

// input nodes
const editModalNameInput = editProfileForm.querySelector("[name = username]");
const editModalAboutmeInput = editProfileForm.querySelector("[name = aboutme]");
// const addCardModalTitleInput = addCardForm.querySelector("[name = title]");
// const addCardModalImagelinkInput =
// addCardForm.querySelector("[name = imagelink]");

// button nodes
const editButton = document.querySelector(".profile__button-edit");
const addCardButton = document.querySelector(".profile__button-add");
// const createButton = addCardForm.querySelector(".modal__save");

// const sectionProfileInfo = document.querySelector(".profile__profile-info");
// const sectionProfileInfoHeading = sectionProfileInfo.querySelector(
//   ".profile__profile-heading"
// );
// const sectionProfileInfoSubtitle =
//   sectionProfileInfo.querySelector(".profile__subtitle");
// const closeButtons = document.querySelectorAll(".modal__close");

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

// REFACTORED in Popup.js
// modalsArray.forEach((modal) => {
//   modal.addEventListener("click", (event) => {
//     if (event.target.classList.contains("modal_opened")) {
//       closeModal(modal);
//     }
//   });
// });

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
function handleImageClick(cardImage, cardName) {
  // modalImage.setAttribute("src", cardImage.getAttribute("src"));
  // modalImage.setAttribute("alt", cardName.textContent);
  // modalImageTitle.textContent = cardName.textContent;
  // openModal(openCardModal);

  popupImage.open(cardName.textContent, cardImage.src);
}

//  handleEscapeToClose() REFACTORED in Popup.js
// function handleEscapeToClose(event) {
//   if (event.key === "Escape") {
//     const openedModal = document.querySelector(".modal_opened");
//     closeModal(openedModal);
//   }
// }

// REFACTORES in UserInfo.js
function handleProfileSubmit(event) {
  event.preventDefault();

  // sectionProfileInfoHeading.textContent = editModalNameInput.value;
  // sectionProfileInfoSubtitle.textContent = editModalAboutmeInput.value;

  profileInfo.setUserInfo();

  // closeModal(editProfileModal);
  editProfilePopup.close();
}

function handleNewCardSubmit(event) {
  section.addItem(event);
  addNewCardPopup.close();
}

//    Render cards
function renderCard(card, method = "append") {
  const cardElement = new Card(card, "#add-elements", handleImageClick);
  elementsList[method](cardElement.returnCardElement());
}

// openModal() REFACTORED in Popup.js
// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", handleEscapeToClose);
// }

// closeModal() REFACTORED in Popup.js
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", handleEscapeToClose);
// }

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
// Click 'edit' button
editButton.addEventListener("click", () => {
  // editModalNameInput.value = sectionProfileInfoHeading.textContent;
  // editModalAboutmeInput.value = sectionProfileInfoSubtitle.textContent;
  editModalNameInput.value = profileInfo.getUserInfo().userName;
  editModalAboutmeInput.value = profileInfo.getUserInfo().userJob;
  // openModal(editProfileModal);
  editProfilePopup.open();
  formValidators.edit_profile_form.resetValidation();
});

addCardButton.addEventListener("click", () => {
  formValidators.add_card_form.toggleSubmitButtonState();
  // openModal(addCardModal);
  addNewCardPopup.open();
});

// Click 'save' button in edit modal
// editProfileForm.addEventListener("submit", handleProfileSubmit);
editProfilePopup.setEventListeners();
// Click 'create' button in add-card modal
// addCardForm.addEventListener("submit", handleNewCardSubmit);
addNewCardPopup.setEventListeners();
// REFACTORED to Section.js
// addCardForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = addCardModalTitleInput.value;
//   const link = addCardModalImagelinkInput.value;
//   renderCard({ name, link }, "prepend");
//   evt.target.reset(); // Resets form fields
//   closeModal(addCardModal);
// });
// initialCards.forEach((card) => {
//   renderCard(card);
// });

section.renderItems();

// REFACTORED to Popup.js
// closeButtons.forEach((button) => {
//   const modal = button.closest(".modal");
//   button.addEventListener("click", () => closeModal(modal));
// });
