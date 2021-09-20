$(function () {
  $(".menu__btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("menu__btn_active");
    $(".menu__list").toggleClass("menu__list_active");
  });

  $(".header__slider").slick({
    dots: true,
    arrows: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
