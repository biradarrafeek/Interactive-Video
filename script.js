function openVideo(videoSrc) {
    const videoPopup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
  
    popupVideo.src = videoSrc;
    videoPopup.style.display = 'flex';
    popupVideo.play();
  }
  
  function closeVideo() {
    const videoPopup = document.getElementById('videoPopup');
    const popupVideo = document.getElementById('popupVideo');
  
    videoPopup.style.display = 'none';
    popupVideo.pause();
    popupVideo.src = '';
  }
  
  window.onclick = function(event) {
    const videoPopup = document.getElementById('videoPopup');
    if (event.target == videoPopup) {
      closeVideo();
    }
  }
  