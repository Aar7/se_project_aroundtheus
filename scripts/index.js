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
const editProfileModal = pageBody.querySelector(".modal"); // form HTML
const modalForm = document.forms["modal-form"];
const modalName = modalForm.querySelector("[name = Name]");
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
initialCards.forEach((card) => {
  elementsList.append(getCardElement(card));
});

//    Close modal function
function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

// EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS EVENT LISTENERS

editButton.addEventListener("click", function () {
  editProfileModal.classList.add("modal_opened"); // opens modal

  modalName.value = sectionProfileInfoHeading.textContent;
  modalDescription.value = sectionProfileInfoSubtitle.textContent;
});

// Click 'close' button in modal
closeButton.addEventListener("click", closeModal);

// Click 'save' button in modal
modalForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  sectionProfileInfoHeading.textContent = modalName.value;
  sectionProfileInfoSubtitle.textContent = modalDescription.value;

  // Close modal
  closeModal();
});

// Click 'close' button in modal. Global function
closeButton.addEventListener("click", closeModal);

// // Conditional to set modal values according to which button was clicked.
// editButton.addEventListener("click", function () {
//   // modalHeader.value = "Edit Profile";
//   modalHeader.textContent = "Edit Profile";
//   modalTitle.setAttribute("placeholder", "Name");
//   modalDescription.setAttribute("placeholder", "About me");
//   saveButton.textContent = "Save";

//   modalTitle.value = sectionProfileInfoHeading.textContent;
//   modalDescription.value = sectionProfileInfoSubtitle.textContent;

//   modal.classList.add("modal_opened"); // opens modal
// });

// addButton.addEventListener("click", function () {
//   modalHeader.textContent = "New place";
//   modalTitle.setAttribute("placeholder", "Title");
//   modalDescription.setAttribute("placeholder", "Image link");
//   saveButton.textContent = "Create";

//   modal.classList.add("modal_opened"); // opens modal
// });

// // Click 'save' button in modal
// modalForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   // Conditional to set the values according to whether the edit or add buttons were pressed
//   if (saveButton.textContent == "Save") {
//     sectionProfileInfoHeading.textContent = modalTitle.value;
//     sectionProfileInfoSubtitle.textContent = modalDescription.value;
//     console.log("'Save' clicked..."); // just placeholder code until actual fn is added
//   } else if (saveButton.textContent == "Create") {
//     // Add title and image link to initialCards beginning
//     let newCardObject = { name: "Foo", link: "bar" };
//     initialCards.unshift(newCardObject);
//     initialCards.forEach((card) => {
//       elementsList.append(getCardElement(card));
//     });
//     // Do I need to re-add the cards to see the new one at the beginning? Try it
//     console.log("'Create' clicked..."); // just placeholder code until actual fn is added
//   }
//   // Close modal
//   closeModal();
//   resetModal();
// });
