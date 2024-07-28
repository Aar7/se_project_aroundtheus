// Replaces functionality of getCardElement
export default class Card {
  // data: OBJECT with card text and link to image
  // cardSelector: selector STRING for the corresponding TEMPLATE element
  // handleImageClick: FUNCTION handling the opening of the preview picture modal
  constructor(
    { name, link },
    cardSelector,
    cardId,
    cardLikeStatus,
    handleImageClick,
    handleDelete,
    handleCardLike
  ) {
    this._name = name;
    this._link = link;
    this._cardId = cardId;
    this._cardLikeStatus = cardLikeStatus;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDelete = handleDelete;
    this._handleLike = handleCardLike;
    this._cardElement = document
      .querySelector(cardSelector)
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
    // console.log("Card constructor - cardObject: ", cardObject);
    // console.log("------");
    // console.log("cardId from Card class: ", cardId);
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLike(this._cardId);
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDelete();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardImage, this._cardName);
    });
  }

  // returnCard: returns fully functional Card class with appropriate data populated in it
  returnCardElement() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    if (this._cardLikeStatus) {
      this._cardLikeButton.classList.add("element__like-button_active");
    }
    // console.log("Generated card: ", this);

    return this._cardElement;
  }
}
