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

function formatTime(date) {
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  return hours + ":" + minutes;
}

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
var day = ("0" + currentDate.getDate()).slice(-2);
var formattedDate = year + "/" + month + "/" + day;
document.getElementById("time").textContent = formattedDate;


var timeElement = document.getElementById("time");
timeElement.addEventListener("mouseover", function() {

  var currentTime = new Date();
  var formattedTime = formatTime(currentTime);

  timeElement.textContent = formattedTime;
  timeElement.classList.add("time-hover");
  var duration = 3000; 
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
  timeElement.textContent = formattedDate;
  timeElement.classList.remove("time-hover");
  timeElement.style.transform = "translate(-50%, -50%)";
});

var shareButton = document.querySelector('.share-button');
var message = document.querySelector('.message');

shareButton.addEventListener('mouseover', function() {
  message.style.opacity = '1';
  message.style.transform = 'translate(-50%, -120%)';
});

shareButton.addEventListener('mouseout', function() {
  message.style.opacity = '0';
  message.style.transform = 'translate(-50%, -100%)';
});

if (!localStorage.getItem('alertShown')) {
 
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    alert("ce site n'est pas vraiment optimisé pour la navigation sur téléphone. nous faisons de notre mieux.");
  } else {

  }
  localStorage.setItem('alertShown', true);
}

function copyText(element) {
  var text = element.innerText || element.textContent;
  var tempInput = document.createElement('input');
  tempInput.setAttribute('value', text);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  alert('Wallet link copied :  ' + text);
}