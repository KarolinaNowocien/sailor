$(document).ready(function(){
  $(".ico").click(function(){
    $("#ico1").toggleClass("act");
    $("#ico2").toggleClass("act2");
    $("#ico3").toggleClass("act3");
  });
});


$(document).ready(function(){
  $(".icona").on("click", function(e){
    e.preventDefault();
    $(".nav__wrapper--list").toggleClass("responsive");
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
/* Volume/Mute - not sure if needed

function setVolume() {
   var volume = document.getElementById("volume");
   video.volume = volume.value;
}

function toggleMute() {
   video.muted = !video.muted;
}
*/

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
