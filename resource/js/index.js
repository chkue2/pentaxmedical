let swiper5 = null;
let swiper5_2 = null;

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
    pagination: {
      el: '.swiper-pagination-01',
      clickable: true,
    }
  });
  const swiper2 = new Swiper('.section__03 .content__swiper.pc', {
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
  const swiper2_1 = new Swiper('.section__03 .content__swiper.mo', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,  
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination-02-mo',
      clickable: true,
    }
  });
  const swiper3 = new Swiper('.section__04 .swiper__container.pc', {
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
    }
  });
  const swiper3_1 = new Swiper('.section__04 .swiper__container.mo', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    loopedSlides: 2,  
    spaceBetween: 84,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination-03-mo',
      clickable: true,
    },
  });
  const swiper4 = new Swiper('.section__05pc .swiper__container', {
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
  const swiper4_1 = new Swiper('.section__05mo .swiper__container', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loopedSlides: 2,  
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination-04-mo',
      clickable: true,
    },
  });
  swiper5 = new Swiper('.section__09pc .ver__slide', {
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
  swiper5_2 = new Swiper('.section__09mo .bottom__slide', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    autoHeight: true,
  });
  const swiper5_1 = new Swiper('.section__09mo .top__slide', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 25,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    on:{
      slidePrevTransitionStart(){
        swiper5_2.slidePrev()
      },
      slideNextTransitionStart(){
        swiper5_2.slideNext()
      }
    }
  });
})

$(document).on('click', '.slide__side p', function(){
  const id = $(this).attr('id').split('slideSide')[1]
  swiper5.slideTo(id)
})

$(document).on('click', '.header__menu--click', function(){
  $('.header.mo').removeClass('on')
  const pos = $(this).attr('id')
  
  const y = document.querySelector(`.${pos}`).offsetTop

  $('html, body').stop().animate({
    scrollTop: y - 170
  })
})

$(document).on('click', '#headerMenu', function(){
  const on = $('.header.mo').attr('class').split(' ').includes('on')

  if(on){
    $('.header.mo').removeClass('on')
  } else {
    $('.header.mo').addClass('on')
  }
  
})