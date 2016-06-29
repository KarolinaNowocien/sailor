$(document).ready(function(){
  $(".navigation__icon-elements").click(function(){
    $("#icon-element-1").toggleClass("act");
    $("#icon-element-2").toggleClass("act2");
    $("#icon-element-3").toggleClass("act3");
  });
});


$(document).ready(function(){
  $(".navigation__icon").on("click", function(e){
    e.preventDefault();
    $(".wrapper__list").toggleClass("responsive");
  });
});

   var video = document.getElementById("video");
   video.controls = false;


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


$("#button__scrolly").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000, 'swing');
});


///////

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
