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

// Dynamic card-addition
const sectionElements = document.querySelector(".elements");
const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#add-elements").content;
function getCardElement(data) {
  let cardElement = elementsTemplate.querySelector(".element").cloneNode(true);
  // Store card title and image in variables
  let cardName = cardElement.querySelector(".element__name");
  let cardImage = cardElement.querySelector(".element__image");

  // Set title, image, and alt to object attributes
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardName.textContent = data.name;
  return cardElement;
}

for (let i in initialCards) {
  elementsList.append(getCardElement(initialCards[i]));
}

// Nodes
const editButton = document.querySelector(".profile__button-edit");
const pageBody = document.querySelector(".page");
const modal = pageBody.querySelector(".modal"); // form HTML
const modalForm = modal.querySelector(".modal__form");
const modalTitle = modalForm.querySelector(".modal__title");
const modalDescription = modalForm.querySelector(".modal__description");
const closeButton = pageBody.querySelector(".modal__close");
const saveButton = pageBody.querySelector(".modal__save");

const sectionProfile = pageBody.querySelector(".profile");
const sectionProfileInfo = pageBody.querySelector(".profile__profile-info");
const sectionProfileInfoHeading = sectionProfileInfo.querySelector(
  ".profile__profile-heading"
);
const sectionProfileInfoSubtitle =
  sectionProfileInfo.querySelector(".profile__subtitle");

// Click 'edit' button
editButton.addEventListener("click", function () {
  modal.classList.add("modal_opened"); // opens modal

  modalTitle.value = sectionProfileInfoHeading.textContent;
  modalDescription.value = sectionProfileInfoSubtitle.textContent;
});

// Click 'close' button in modal
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal_opened");
});

// Edit fields in modal form and save to HTML without page-refresh
modalForm.addEventListener("submit", function handleModalFormSubmit(evt) {
  evt.preventDefault();
  // console.log(evt);

  sectionProfileInfoHeading.textContent = modalTitle.value;
  sectionProfileInfoSubtitle.textContent = modalDescription.value;

  // Close modal
  modal.classList.remove("modal_opened");
});
