$(function () {
  $(".site-div").width(window.innerWidth - 17);

  $(window).resize(function () {
    $(".site-div").width($(window).width() - 17);
  });

  // initial scroll positioning
  $(window).one("scroll", function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});
