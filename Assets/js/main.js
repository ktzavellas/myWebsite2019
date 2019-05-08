"use strict";

$(window).on("load", function() {
  /* Animations when the page loads */
  $(".jumbotron")
    .delay(4500)
    .animate(
      {
        top: "0",
        opacity: "1"
      },
      3500,
      function() {
        $(".jumbotron").addClass("updateColor");
      }
    );
  $(".myContainer").animate(
    {
      right: "0",
      opacity: "1"
    },
    4500
  );
  $("#projectSection").animate(
    {
      top: "0px",
      opacity: "1"
    },
    2500
  );
});

$(document).ready(function() {
  /*Scroll effect when navbar links are clicked */
  $("#homeLink").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#homeLink").scrollTop()
      },
      "slow"
    );
  });
  $("#aboutLink").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#aboutMe").offset().top
      },
      "slow"
    );
  });
  $("#projectLink").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#projectIntro").offset().top - 100
      },
      "slow"
    );
  });
  $("#contactLink").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#contact").offset().top - 120
      },
      "slow"
    );
  });
  $("#connectLink").click(function() {
    $("html,body").animate(
      {
        scrollTop: $("#socialMedia").offset().top - 100
      },
      "slow"
    );
  });

  /* Button to scroll up */
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
      $("#back2Top").fadeIn();
    } else {
      $("#back2Top").fadeOut();
    }
  });

  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /* Code to animate the word "hello" in the header */
  /* $(".ml10 .letters").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml10 .letter",
      rotateY: [-90, 0],
      duration: 1300,
      delay: function(el, i) {
        return 45 * i;
      }
    })
    .add({
      targets: ".ml10",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 10000
    }); */

  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemTop <= docViewBottom;
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $(".animated").each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this)
          .removeClass("fadeOut")
          .addClass("fadeIn");
      } else {
        $(this)
          .removeClass("fadeIn")
          .addClass("fadeOut");
      }
    });
  });
});
//Code to handle navbar-collapse
$(function() {
  var navMain = $(".navbar-collapse");
  navMain.on("click", "a:not([data-toggle])", null, function() {
    navMain.collapse("hide");
  });
});
$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
