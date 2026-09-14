$(function(){
  $('.d1-down').mouseenter(function(){
    $('.header').addClass('down'),
    $('.gnb').addClass('down')
  })
  $('.header').mouseleave(function(){
    $('.header').removeClass('down'),
    $('.gnb').removeClass('down')
  })
  //swiper-banner
  new Swiper('.banner-sw',{
  navigation: {
    nextEl: '.banner-next-btn',
    prevEl: '.banner-prev-btn'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true,
  autoplay: {
    delay: 2500,
  },
  speed: 1000,
  })
  //swiper-main02
  new Swiper('.exhibition-sw',{
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
  nextEl: '.exhibition-next-btn',
  prevEl: '.exhibition-prev-btn'
  },
  loop: true,
  autoplay: {
    delay: 3500,
  },
  speed: 1000,
  breakpoints: {
    721: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
    },
  },
  })
})