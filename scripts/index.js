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
const sectionElements = document.querySelector(".elements");
const elementsList = document.querySelector(".elements__list");
const elementsTemplate = document.querySelector("#add-elements").content;
const editButton = document.querySelector(".profile__button-edit");
const pageBody = document.querySelector(".page");
const modal = pageBody.querySelector(".modal"); // form HTML
const modalForm = document.forms["modal-form"];
const modalTitle = modalForm.querySelector("[name = Title]");
const modalDescription = modalForm.querySelector("[name = Description]");
const closeButton = pageBody.querySelector(".modal__close");
const saveButton = pageBody.querySelector(".modal__save");
const sectionProfile = pageBody.querySelector(".profile");
const sectionProfileInfo = pageBody.querySelector(".profile__profile-info");
const sectionProfileInfoHeading = sectionProfileInfo.querySelector(
  ".profile__profile-heading"
);
const sectionProfileInfoSubtitle =
  sectionProfileInfo.querySelector(".profile__subtitle");

// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
//    Retrieve card data
function getCardElement(data) {
  const cardElement = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  // Store card title and image in variables
  const cardName = cardElement.querySelector(".element__name");
  const cardImage = cardElement.querySelector(".element__image");

  // Set title, image, and alt to object attributes
  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardName.textContent = data.name;
  return cardElement;
}
for (let i in initialCards) {
  elementsList.append(getCardElement(initialCards[i]));
}

//    Close modal function
function closeModal() {
  modal.classList.remove("modal_opened");
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS
// Click 'edit' button
editButton.addEventListener("click", function () {
  modal.classList.add("modal_opened"); // opens modal

  modalTitle.value = sectionProfileInfoHeading.textContent;
  modalDescription.value = sectionProfileInfoSubtitle.textContent;
});

// Click 'close' button in modal
closeButton.addEventListener("click", closeModal);

// Click 'save' button in modal
modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  sectionProfileInfoHeading.textContent = modalTitle.value;
  sectionProfileInfoSubtitle.textContent = modalDescription.value;

  // Close modal
  closeModal();
});
