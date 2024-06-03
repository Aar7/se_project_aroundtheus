// Replaces functionality of getCardElement
export default class Card {
  // data: OBJECT with card tect and link to image
  // cardSelector: selector STRING for the corresponding TEMPLATE element
  // handleImageClick: FUNCTION handling the opening of the preview picture modal
  constructor({ name, link }, cardSelector, handleImageClick) {
    /* Creates and assigns _handleImageClick
    the value handleImageClick
    passed to the Card upon creation */
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".element__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._cardElement
      .querySelector(".element__delete-card-button")
      .addEventListener("click", () => {
        this._handleDelete();
      });

    this._cardElement
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleImageClick(this._cardImage, this._cardName);
      });
  }

  _handleDelete() {
    this._cardElement.remove();
  }

  _handleLike() {
    this._cardElement
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  // returnCard: returns fully functional Card class with appropriate data populated in it
  returnCardElement() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    this._cardImage = this._cardElement.querySelector(".element__image");
    this._cardName = this._cardElement.querySelector(".element__name");

    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".element__name").textContent = this._name;

    return this._cardElement;
  }
}
