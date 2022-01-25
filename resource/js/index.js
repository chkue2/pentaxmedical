let swiper5 = null;

$(document).ready(function(){
  const swiper1 = new Swiper('.section__01 .swiper__container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 92,
    loop: true,
    loopedSlides: 20,  
    autoHeight: false,
    navigation: {
      nextEl: '.swiper-button-next-01',
      prevEl: '.swiper-button-prev-01',
    },
  });
  const swiper2 = new Swiper('.section__03 .content__swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,  
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination-02',
      clickable: true,
    }
  });
  const swiper3 = new Swiper('.section__04 .swiper__container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,  
    spaceBetween: 84,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination-03',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-03',
      prevEl: '.swiper-button-prev-03',
    },
  });
  const swiper4 = new Swiper('.section__05 .swiper__container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loopedSlides: 2,  
    spaceBetween: 84,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination-04',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-04',
      prevEl: '.swiper-button-prev-04',
    },
    on:{
      activeIndexChange(e){
        const idx = e.realIndex
        $('.section__05 .section__header span').removeClass('active')
        $(`#header${idx}`).addClass('active')
      }
    }
  });
  swiper5 = new Swiper('.section__09 .ver__slide', {
    slidesPerView: 'auto',
    direction: 'vertical',
    centeredSlides: true,
    loop: true,
    spaceBetween: 84,
    autoHeight: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    on:{
      activeIndexChange(e){
        const idx = e.realIndex
        $('.slide__side p').removeClass('on')
        $(`#slideSide${idx}`).addClass('on')
      }
    }
  });
})

$(document).on('click', '.slide__side p', function(){
  const id = $(this).attr('id').split('slideSide')[1]
  swiper5.slideTo(id)
})

$(document).on('click', '.header__menu--click', function(){
  const pos = $(this).attr('id')
  
  const y = document.querySelector(`.${pos}`).offsetTop

  $('html, body').stop().animate({
    scrollTop: y - 170
  })
})