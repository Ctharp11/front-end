var images = [];
var slideIndex = 1;
moveSlide(slideIndex);

$(".prev").on("click", () => toggleSlide(-1));
$(".next").on("click", () => toggleSlide(1));

$(".dot").on("click", currentSlide);

function currentSlide() {
   var slideNum = $(this).attr('data-id');
   moveSlide(slideIndex = slideNum);
}

function toggleSlide(n) {
    moveSlide(slideIndex += n);
}

function moveSlide(n) {
    var slides = $(".slides");
    var dots = $(".dot");

    //two conditionals check if the number is above 3 or below 1, and resets slideIndex if so
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    //loops that keep removes active class from each dots and gives each slide a display of none. 
    for (var i = 0; i < slides.length; i++) {
        $(slides[i]).css('display', 'none');
    }
    for (var i = 0; i < dots.length; i++) {
        $(dots[i]).removeClass(" active").addClass("");
    }
    //this takes the slideIndex, subtracts one to get the index, and assigns it the active class or display: block
    $(slides[slideIndex - 1]).css('display', 'block');
    $(dots[slideIndex - 1]).addClass(' active');
}




