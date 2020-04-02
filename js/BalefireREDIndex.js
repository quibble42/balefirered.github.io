$(function() {
  $('a[href*="#"]:not([href="#"])').click(function()  {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top-62
        },
        600
      );
      return false;
    }
  });
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("#navbarid");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
    var $navicon = $("#navicon");
    $navicon.toggleClass('navscrolled', $(this).scrollTop() > $navicon.height());
  });
});