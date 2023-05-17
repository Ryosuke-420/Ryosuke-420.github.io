$(function() {
    $('.level-slider').slick({
        dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
      });
});
var clickCount = 0;
var messages = [
  "Congratulations! You clicked 20 times.",
  "Great job! You reached 20 clicks.",
  "Wow! You made it to 20 clicks.",
  "Awesome! 20 clicks achieved.",
  "Well done! 20 clicks completed."
];

function countClicks() {
  clickCount++;
  if (clickCount === 20) {
    displayPopup();
    clickCount = 0; 
  }
}

function displayPopup() {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];
  alert(message);
}