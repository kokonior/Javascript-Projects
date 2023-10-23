var swiper = new Swiper('.blog-slider', {
slidesPerView: 4,
spaceBetween: 12,

loop: true,

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
keyboard: true,
mousewheel: true,
coverflowEffect: {
  rotate: 50,
  stretch: 50,
  depth: 0,
  modifier: 1,
  slideShadows: true,
},
   
    
});