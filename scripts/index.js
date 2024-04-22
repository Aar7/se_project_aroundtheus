const initialCards = [
  {
    name: "Yosimite Valley",
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

// NODES NODES NODES NODES
const pageBody = document.querySelector(".page");
const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#add-elements").content;

// modal nodes
const editProfileModal = document.querySelector("#edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const openCardModal = document.querySelector("#open-card-modal");

// form nodes
const editProfileForm = document.forms["edit-profile-form"];
const addCardForm = document.forms["add-card-form"];

// input nodes
const editModalNameInput = editProfileForm.querySelector("[name = name]");
const editModalAboutmeInput = editProfileForm.querySelector("[name = aboutme]");
const addCardModalTitleInput = addCardForm.querySelector("[name = title]");
const addCardModalImagelinkInput =
  addCardForm.querySelector("[name = imagelink]");

// button nodes
const editButton = document.querySelector(".profile__button-edit");
const addCardButton = document.querySelector(".profile__button-add");
const editProfileCloseModalButton =
  editProfileModal.querySelector(".modal__close");
const addCardCloseModalButton = addCardModal.querySelector(".modal__close");
const openCardCloseModalButton = openCardModal.querySelector(".modal__close");

const sectionProfileInfo = document.querySelector(".profile__profile-info");
const sectionProfileInfoHeading = sectionProfileInfo.querySelector(
  ".profile__profile-heading"
);
const sectionProfileInfoSubtitle =
  sectionProfileInfo.querySelector(".profile__subtitle");
const closeButtons = document.querySelectorAll(".modal__close");

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
//    Retrieve card data
function getCardElement(data) {
  const cardElement = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  // Store card title and image in variables
  const cardName = cardElement.querySelector(".element__name");
  const cardImage = cardElement.querySelector(".element__image");
  const likeCardButton = cardElement.querySelector(".element__like-button");
  const deleteCardButton = cardElement.querySelector(
    ".element__delete-card-button"
  );

  cardImage.addEventListener("click", () => {
    const modalImage = openCardModal.querySelector(".modal__image");

    modalImage.setAttribute("src", cardImage.getAttribute("src"));
    modalImage.setAttribute("alt", cardName.textContent);
    openCardModal.querySelector(".modal__image-title").textContent =
      cardName.textContent;
    openModal(openCardModal);
  });

  likeCardButton.addEventListener("click", () => {
    likeCardButton.classList.toggle("element__like-button_active");
  });

  deleteCardButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Set title, image, and alt to object attributes
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardName.textContent = data.name;
  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
// Click 'edit' button
editButton.addEventListener("click", () => {
  editModalNameInput.value = sectionProfileInfoHeading.textContent;
  editModalAboutmeInput.value = sectionProfileInfoSubtitle.textContent;

  openModal(editProfileModal);
});
addCardButton.addEventListener("click", () => openModal(addCardModal));

// Click 'save' button in edit modal
editProfileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  sectionProfileInfoHeading.textContent = editModalNameInput.value;
  sectionProfileInfoSubtitle.textContent = editModalAboutmeInput.value;

  closeModal(editProfileModal);
});

// Click 'create' button in add-card modal
addCardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = addCardModalTitleInput.value;
  const link = addCardModalImagelinkInput.value;

  const newCard = getCardElement({ name, link });
  elementsList.prepend(newCard);

  evt.target.reset(); // Resets form fields

  closeModal(addCardModal);
});

initialCards.forEach((card) => {
  elementsList.append(getCardElement(card));
});

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});
