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

        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');

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
  document.body.scrollTop = 0; 
}

function updateTime() {
  var timeDiv = document.getElementById("time");
  var currentDate = new Date();

  if (timeDiv.getAttribute("data-display") === "date") {
    var formattedDate = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate();
    timeDiv.textContent = formattedDate;
    timeDiv.setAttribute("data-display", "time");
  } else {
    var hours = currentDate.getHours().toString().padStart(2, "0");
    var minutes = currentDate.getMinutes().toString().padStart(2, "0");
    var formattedTime = hours + ":" + minutes;
    timeDiv.textContent = formattedTime;
    timeDiv.setAttribute("data-display", "date");
  }
}

window.onload = function() {
  updateTime();
  setInterval(updateTime, 5000);
};

if (!localStorage.getItem('alertShown')) {
 
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("ce site n'est pas vraiment optimisé pour la navigation sur téléphone. nous faisons de notre mieux.");
  } else {

  }
  localStorage.setItem('alertShown', true);
}

