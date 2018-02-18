var pageHeader = document.querySelector('.page__header');
var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');
pageHeader.classList.toggle('page__header--active');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }

  pageHeader.classList.toggle('page__header--active');
});
