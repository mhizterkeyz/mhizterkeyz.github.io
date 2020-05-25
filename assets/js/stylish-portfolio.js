(function ($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
    $(this).toggleClass("active");
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $("#sidebar-wrapper .js-scroll-trigger").click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
  });

  // Scroll to top/bottom button switch
  $(".scroll-to-top").fadeIn();
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").attr("href", "#page-top");
      $(".scroll-to-top i").addClass("fa-angle-up");
      $(".scroll-to-top i").removeClass("fa-angle-down");
    } else {
      $(".scroll-to-top").attr("href", "#about");
      $(".scroll-to-top i").removeClass("fa-angle-up");
      $(".scroll-to-top i").addClass("fa-angle-down");
    }
  });
})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function (event) {
  var that = $(this);
  that.on("click", onMapClickHandler);
  that.off("mouseleave", onMapMouseleaveHandler);
  that.find("iframe").css("pointer-events", "none");
};
var onMapClickHandler = function (event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off("click", onMapClickHandler);
  // Enable scrolling zoom
  that.find("iframe").css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on("mouseleave", onMapMouseleaveHandler);
};
// Enable map zooming with mouse scroll when the user clicks the map
$(".map").on("click", onMapClickHandler);
