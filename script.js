var body = document.body;

var h1El = document.createElement("h1");
h1El.textContent = "JavaScript Quiz";
body.appendChild(h1El).style.textAlign = "center";
body.appendChild(h1El).style.fontWeight = "900";

var h2E2 = document.createElement("h2");
h2E2.textContent = "Javascript is hard. This timed quiz will test your skills. Be sure to log your high scores when you finish.";
body.appendChild(h2E2).style.textAlign = "center";
body.appendChild(h2E2).style.color = "blue";

var carousel = document.querySelector(".carouselbox");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";
var index = 0;
var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];
var currentImage;
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

next.onclick= function(event) {
  event.stopPropagation();

  navigate(1);
};

prev.addEventListener("click", function(event) {
  event.stopPropagation();

  navigate(-1);
});

navigate(0);