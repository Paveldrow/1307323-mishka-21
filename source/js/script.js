const popup = document.querySelector('.modal-block');
const popupButtonOpen = document.querySelector('.button-js');
const popupButtonClose = popup.querySelector('.modal__add-cart-button');
const cart = document.querySelector('.main-nav__link--cart');

popupButtonOpen.addEventListener('click', function () {
  popup.classList.add('modal-block--opened')
});

popupButtonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-block--opened')
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal-block--opened')
  }
});
