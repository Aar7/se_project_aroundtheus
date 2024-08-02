export default class Card {
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
    this.cardId = cardId;
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
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener("click", () => {
      // this._handleLike(this._cardId);
      this._handleLike(this);
    });

    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDelete(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick(this._cardImage, this._cardName);
    });
  }

  getId() {
    return this.cardId;
  }

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  toggleCardLikeButton() {
    this._cardLikeButton.classList.toggle("element__like-button_active");
  }

  checkIfLikeActive() {
    if (
      this._cardLikeButton.classList.contains("element__like-button_active")
    ) {
      return false;
    } else {
      return true;
    }
  }

  returnCardElement() {
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;
    if (this._cardLikeStatus) {
      this._cardLikeButton.classList.add("element__like-button_active");
    }

    return this._cardElement;
  }
}
