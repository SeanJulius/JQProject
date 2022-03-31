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