$(document).ready(function () {
    var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
      pageUpDown: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    effect: "coverflow",
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
      pageUpDown: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

  });

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    console.log("клик по кнопке меню");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible");
  });
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visability');
    modalDialog.addClass('modal__dialog--visability');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visability');
    modalDialog.removeClass('modal__dialog--visability');
  }
  // Обработка формы
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Specified name",
          minlength: "The name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        phone: {
          required: "Phone number required",
          minlength: "Enter the number in the format +7(ХХХ) ХХХ-ХХ-ХХ",
        },
      },
    });
  });
  $('.subscribe').validate({
      errorClass: "fix",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });
  $('.phone_us').mask('+7(000) 000-00-00');
});