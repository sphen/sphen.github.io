// Add scrollspy.js
$('body').scrollspy({
  target: ".navbar",
  offset: 0
});

// Add smooth scrolling to all links inside a navbar
$("#navbar a").on('click', function(event) {

  event.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function() {

    window.location.hash = hash;
  });
});