// Preloader function
$(window).on("load", function () {
  $(".preloader").fadeOut().end().delay(400).fadeOut("slow");
});

// Main Scripts
$(document).ready(function () {
  // Burger click event
  $(".burger").click(function () {
    $(this).toggleClass("open");
    $(".navbar").fadeToggle(); //Show Navbar
  });

  //Easy scroll from navigation
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active"); //Delete Active class for all links
    $(this).addClass("active"); //Add active class for clicked link
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top - 100;
    $("body,html").animate({ scrollTop: destination }, 1500);

    // If mobile => scroll and close navbar
    if ($(".burger").hasClass("open")) {
      setTimeout(() => {
        $(".burger").removeClass("open");
        $(".navbar").fadeOut();
      }, 1500);
    }
  });

  //Back to top button function
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".to-top-btn").fadeIn(250);
    } else {
      $(".to-top-btn").fadeOut(250);
    }
  });
  $(".to-top-btn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });
});

// Scroll functions
$(document).scroll(function () {
  $(document).scrollTop() > $(".header-bar").height() + 50
    ? $(".nav-filter").addClass("blured-nav")
    : $(".nav-filter").removeClass("blured-nav");
});
