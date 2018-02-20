console.log("hi")
// About page readmore/readless
$(".readmore a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideDown(1000)
  $(".readmore").hide(1000)
  $(".readless").show(1000)
})
$(".readless a").click(function(){
  event.preventDefault();
  $("#show-this-on-click").slideUp(1000)
  $(".readless").hide(1000)
  $(".readmore").show(1000)
})

// Corporate Portfolio Modal and Slideshow:

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal//
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls//
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls//
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//duplicate above to create another modal for 'Education' lightbox//
function openModal_2() {
  document.getElementById('myModal_2').style.display = "block";
}

function closeModal_2() {
  document.getElementById('myModal_2').style.display = "none";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_2");
  var dots = document.getElementsByClassName("demo_2");
  var captionText = document.getElementById("caption_2");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Slider for home page

$('#home').onload(function(){


var pics = ['Slider_1280x400px_MST.jpg', 'Slider_1280x400px_NGS.jpg', 'Slider_1280x400px_OA.jpg', 'Slider_1280x400px_RBF.jpg','Slider_1280x400px_WAI.jpg']

    pics.forEach(function(pic){
          $('#banner').addClass(pic)
          pics.setInterval()

        })
})
