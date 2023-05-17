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

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox
}

function formatTime(date) {
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  return hours + ":" + minutes;
}

// Display the current date
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var day = ("0" + currentDate.getDate()).slice(-2);
var formattedDate = year + "/" + month + "/" + day;
document.getElementById("time").textContent = formattedDate;

// Add mouseover and mouseout event listeners
var timeElement = document.getElementById("time");
timeElement.addEventListener("mouseover", function() {
  // Get the current time and format it as "hh:mm"
  var currentTime = new Date();
  var formattedTime = formatTime(currentTime);

  // Update the text content with the formatted time and add animation class
  timeElement.textContent = formattedTime;
  timeElement.classList.add("time-hover");

  // Track mouse movement and update position
  var duration = 3000; // Duration in milliseconds
  var startTime = Date.now();
  var startX = event.clientX;
  var startY = event.clientY;

  function updatePosition() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      var deltaX = event.clientX - startX;
      var deltaY = event.clientY - startY;
      var translateX = Math.round(deltaX / duration * elapsedTime);
      var translateY = Math.round(deltaY / duration * elapsedTime);

      timeElement.style.transform = "translate(-50%, -50%) translate(" + translateX + "px, " + translateY + "px)";
      requestAnimationFrame(updatePosition);
    }
  }

  updatePosition();
});

timeElement.addEventListener("mouseout", function() {
  // Restore the original formatted date and remove animation class
  timeElement.textContent = formattedDate;
  timeElement.classList.remove("time-hover");
  timeElement.style.transform = "translate(-50%, -50%)";
});