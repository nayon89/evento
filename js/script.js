var countDownDate = new Date("oct 10, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("bday").innerHTML = days
  document.getElementById("bhours").innerHTML = hours
  document.getElementById("bminutes").innerHTML = minutes
  document.getElementById("bseconds").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


$('.venobox').venobox();



$('.festival-slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
});

$(function() {  
  $(".event-scroll").niceScroll({
    cursorcolor: "#ffa913",
    cursorwidth: "12px",
    cursorborder: "1px solid transparent",
    scrollspeed: 60, 
    mousescrollstep: 30,
    background: "#d6d6d6"
  });
});
$('.gallery-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
});

$('.feedback-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  prevArrow:'<i class="fas fa-angle-left prev"></i>',
  nextArrow:'<i class="fas fa-angle-right next"></i>',
});

$('.plan-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-chevron-up prev"></i>',
  nextArrow:'<i class="fas fa-chevron-down next"></i>',
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});