$(document).ready(function() {
  $('.nav__wrapper').css('bottom', '0');

  $('.nav__wrapper').css('right', '-30em');

  $('#menu__toggle--open').click(function() {

    $('.nav__wrapper').css('right', '0');

  });

  $('#menu__toggle--close').click(function() {

    $('.nav__wrapper').css('right', '-35em');

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
      playpause.innerHTML = "Continue watching";
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
