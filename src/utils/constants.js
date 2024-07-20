/* export const initialCards = [
  {
    cardName: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    cardName: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    cardName: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    cardName: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    cardName: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    cardName: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
]; */

// NODES NODES NODES NODES
export const elementsList = document.querySelector(".elements__list");

// modal nodes
export const modals = document.querySelectorAll(".modal");
export const modalsArray = Array.from(modals);
export const editProfileModal = document.querySelector("#edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const openCardModal = document.querySelector("#open-card-modal");
export const modalImage = openCardModal.querySelector(".modal__image");
export const modalImageTitle = openCardModal.querySelector(
  ".modal__image-title"
);

// form nodes
export const editProfileForm = document.forms["edit-profile-form"];
// export const addCardForm = document.forms["add-card-form"];

// input nodes
export const editModalNameInput =
  editProfileForm.querySelector("[name = userName]");
export const editModalAboutmeInput =
  editProfileForm.querySelector("[name = aboutMe]");
// export const addCardModalTitleInput =
//   addCardForm.querySelector("[name = name]");
// export const addCardModalImagelinkInput =
//   addCardForm.querySelector("[name = link]");

// button nodes
export const editButton = document.querySelector(".profile__button-edit");
export const addCardButton = document.querySelector(".profile__button-add");
// export const createButton = addCardForm.querySelector(".modal__save");
export const deleteCardButton = document.querySelector(
  ".element__delete-card-button"
);

export const sectionProfileInfo = document.querySelector(
  ".profile__profile-info"
);
export const sectionProfileInfoHeading = document.querySelector(
  ".profile__profile-heading"
);
export const sectionProfileInfoSubtitle =
  sectionProfileInfo.querySelector(".profile__subtitle");
// export const closeButtons = document.querySelectorAll(".modal__close");
