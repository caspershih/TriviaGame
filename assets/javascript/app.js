// defining varibles

var questions = ["Which of the following is not an insect?","Which of the following is not"]
var correctAnswer = 0;
var incorrectAnswer = 0;
var timesUp = 0;

// timer
var timer;




// slideshow
var slides = 1;
showSlides(slide);

function plusSlides(n) {
    showSlides(slides +=n);
}

function currentslide(n) {
    showslides(slides = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slides = 1}
    if (n < 1) {slides = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide-1].style.display = "block";
    dots[slide-1].className += "active";
}
