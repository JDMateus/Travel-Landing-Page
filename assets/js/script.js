const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

const btns = document.querySelectorAll('.nav-btn');
const slides = document.querySelectorAll('.video-slide');
const contents = document.querySelectorAll('.content');

const sliderNav = function (index) {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  contents.forEach((content) => {
    content.classList.remove('active');
  });
  btns[index].classList.add('active');
  slides[index].classList.add('active');
  contents[index].classList.add('active');
};

btns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    sliderNav(index);
  });
});

// NAVIGATION

const menuOptions = document.querySelectorAll('.navigation-items a');

menuOptions.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log('pulsando menu');
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
    sliderNav(index);
  });
});
