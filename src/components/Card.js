// Replaces functionality of getCardElement
export default class Card {
  // data: OBJECT with card text and link to image
  // cardSelector: selector STRING for the corresponding TEMPLATE element
  // handleImageClick: FUNCTION handling the opening of the preview picture modal
  constructor({ name, link }, cardSelector, handleImageClick, handleDelete) {
    /* Creates and assigns _handleImageClick
    the value handleImageClick
    passed to the Card upon creation */
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDelete = handleDelete;
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardName = this._cardElement.querySelector(".element__name");
    this._cardLikeButton = this._cardElement.querySelector(
      ".element__like-button"
    );
    this._cardDeleteButton = this._cardElement.querySelector(
      ".element__delete-card-button"
    );
    this._cardDeleteModal = document.getElementById("delete-card-modal");
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._openDeleteConfirmation();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardImage, this._cardName);
    });
  }

  _openDeleteConfirmation() {
    this._cardDeleteModal.classList.add("modal_opened");
  }

  _handleLike() {
    this._cardLikeButton.classList.toggle("element__like-button_active");
  }

  // returnCard: returns fully functional Card class with appropriate data populated in it
  returnCardElement() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;

    return this._cardElement;
  }
}
