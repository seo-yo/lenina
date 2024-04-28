AOS.init({
  offset: 0,
  delay: 0,
  duration: 1000,
  easing: "ease-in-out",
});

function de_headerFix() {
  let scrollTop = $(window).scrollTop();
  let headerHeight = $("#header").offset().top;
  if (scrollTop > headerHeight) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
}
$(function () {
  de_headerFix();

  $(".gnb li").hover(
    function () {
      $(this).children(".depth2").stop().slideDown();
    },
    function () {
      $(this).children(".depth2").stop().slideUp();
    }
  );

  $("#header .btn-menu").on("click", function () {
    $("#header").addClass("bg");
    $(".de-fnav").addClass("on");
  });
  $(".de-fnav + .nav-bg").on("click", function () {
    $("#header").removeClass("bg");
    $(".de-fnav").removeClass("on");
  });

  $("#header .btn-search-open").on("click", function () {
    $("#header").addClass("bg");
    $(".de-search").addClass("on");
  });
  $(".de-search + .search-bg").on("click", function () {
    $("#header").removeClass("bg");
    $(".de-search").removeClass("on");
  });

  $(".fnav .view, .fnav .board").click(function () {
    $(this).parent("li").toggleClass("open");
    $(this).parent("li").children("ul").slideToggle(300);
  });
});
$(window).scroll(function () {
  de_headerFix();
});
