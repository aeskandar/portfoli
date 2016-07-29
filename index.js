$(document).ready(function() {
  $("#aboutbtn").click(function() {
    $('html, body').animate({
      scrollTop: $("#me").offset().top
    }, 1000);
  });

  $("#portfoliobtn").click(function() {
    $("html, body").animate({
      scrollTop: $("#portfolio").offset().top
    }, 1000);
  });

  $("#contactbtn").click(function() {
    $("html, body").animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });

});
