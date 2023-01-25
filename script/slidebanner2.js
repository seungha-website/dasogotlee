$(function () {
  var swiper = new Swiper('.slide2 ', {
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2300,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    pagination: {//블릿 버튼
      el: '.slide2 .swiper-pagination',
      clickable: true,
    },
    navigation: {//화살표 버튼
      nextEl: '.slide2 .swiper-button-next',
      prevEl: '.slide2 .swiper-button-prev',
    },
  });

  var swiper = new Swiper('.slide ', {
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2000,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    effect: "fade",

  });

  var swiper = new Swiper('.slide3 ', {
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2000,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    effect: "fade",

  });
});


