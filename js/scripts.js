jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a heading.");
    alert("I told you, THIS IS A HEADING!");
  });

  jQuery("img").click(function() {
   alert("This is an image.");
  });
});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});