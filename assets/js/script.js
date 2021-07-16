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

var cookieConsentOptions = {
  // Cookie usage prevention text
  textPopup:
    'We use cookies/targeted advertising to ensure you have the best experience on our site. If you continue to use our site, we will assume that you agree to their use. For more information, please see our <a href="#">privacy policy</a>.',
  // The text of the accept button
  textButtonAccept: "Accept all",
  // The text of the configure my options button
  textButtonConfigure: "Configuring choices",
  // The text of the save my options button
  textButtonSave: "Save choices",
  // The text of the first parameter that the user can define in the "configuration" section.
  textAuthorization1: "Allow access to geolocation data",
  // The cookie name of the first authorization
  nameCookieAuthorization1: "autoriseGeolocation",
  // The text of the second parameter that the user can define in the "configuration" section.
  textAuthorization2:
    "Allow personalised ads and content, ad measurement and audience analysis.",
  // The cookie name of the second authorization
  nameCookieAuthorization2: "targetedAdvertising",
  // The text of the third parameter that the user can define in the "configuration" section.
  textAuthorization3: "Storing and/or accessing information on a device",
  // The cookie name of the third authorization
  nameCookieAuthorization3: "cookieConsent",
};
popupConsent(cookieConsentOptions);
