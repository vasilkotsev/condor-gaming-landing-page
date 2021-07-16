$(document).ready(function () {
  /* Hamburger menu functionality */
  let menu = $(".menu");
  let logo = $("#logo");

  let header = $("header");

  let hamburger = header.find(".hamburger");

  hamburger.on("click", function () {
    $(this).toggleClass("hamburger--stand is-active");
    menu.toggleClass("active");
    $("html").toggleClass("hidden-scroll");
    logo.toggleClass("logo-fixed");
  });

  /*animation scroll functionallity*/
  $("#hero-section .primary-button")
    .add("header nav .menu a")
    .on("click", function (e) {
      e.preventDefault();
      let element = $(this).attr("href");
      let offsetTop = $(element).offset().top;
      offsetTop = Math.round(offsetTop);

      $("html, body").animate(
        {
          scrollTop: offsetTop - 50,
        },
        600
      );

      menu.removeClass("active");
      $("html").removeClass("hidden-scroll");
      logo.removeClass("logo-fixed");
      hamburger.removeClass("hamburger--stand is-active");
    });

  /* scroll to top */
  $(".scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });
});
