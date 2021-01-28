$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // SECOND SWIPER

  var mySwiper = new Swiper('.review-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,

    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  $(".header").on("click", ".menu-button", function () {
    $(".header").toggleClass('menu-opened');
  })

})