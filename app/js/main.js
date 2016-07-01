
///// menu icon animated ///////////////////
$(document).ready(function(){
  $(".navigation__icon-elements").click(function(){
    $("#icon-element-1").toggleClass("act");
    $("#icon-element-2").toggleClass("act2");
    $("#icon-element-3").toggleClass("act3");
  });
});

///// drop down menu ///////////////////
$(document).ready(function(){
  $(".navigation__icon").on("click", function(e){
    e.preventDefault();
    $(".wrapper__list").toggleClass("responsive");
  });
});

///// default contronls disabled ///////////////////
   var video = document.getElementById("video");
   video.controls = false;

///// play/pause video  ///////////////////
   function togglePlayPause() {
   var playpause = document.getElementById("playpause");
   if (video.paused || video.ended) {
      playpause.title = "pause video";
      playpause.innerHTML = "Pause video";
      video.play();
   }
   else {
      playpause.title = "continue watching";
      playpause.innerHTML = "Continue";
      video.pause();
   }
}

///// scrolly button  ///////////////////
$("#button__scrolly").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000, 'swing');
});

///// carousel  ///////////////////
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:0,
    responsive:{
        100:{
          items:3,
         }
     }
  });
});

///// footer - email input  ///////////////////
$(".footer__input").focus(function(){
  $(this).parent().addClass("is-active is-completed");
});

$(".footer__input").focusout(function(){
  if($(this).val() === "")
    $(this).parent().removeClass("is-completed");
  $(this).parent().removeClass("is-active");
});
