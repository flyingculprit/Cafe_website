let slideIndex = 1;
let myTimer;
let slideshowContainer;

window.addEventListener("load", function () {
  showSlides(slideIndex);
  myTimer = setInterval(function () {
    plusSlides(1);
  }, 5000);

  // ============== Additional option for client preference ============== \\
  // Uncomment the lines below to activate pause/resume on slideshow hover

  // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  // slideshowContainer.addEventListener("mouseenter", pause);
  // slideshowContainer.addEventListener("mouseleave", resume);
});

// Next and Previous Control
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }

  if (n === -1) {
    myTimer = setInterval(function () {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function () {
      plusSlides(n + 1);
    }, 4000);
  }
}

// Controls the current slide and resets interval, if needed
function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function pause() {
  clearInterval(myTimer);
}

function resume() {
  clearInterval(myTimer);
  myTimer = setInterval(function () {
    plusSlides(slideIndex);
  }, 4000);
}