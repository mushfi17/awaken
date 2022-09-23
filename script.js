var swiper = new Swiper(".about-slider", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

function createBox(){

  let span = document.createElement('span');

  span.classList.add('animated-box');

  let size = Math.random() * 80;

  span.style.height = 40 + size + 'px';
  span.style.width = 40 + size + 'px';

  span.style.top = Math.random() * innerHeight + 'px';
  span.style.left = Math.random() * innerWidth + 'px';

  document.querySelector('.gradiant-background').appendChild(span);

  setTimeout(() => {
      span.remove();
  },3000)

}

setInterval(createBox, 400);

//

var swiper = new Swiper(".products-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

//

var swiper = new Swiper(".reviews-slider", {
  loop:true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

