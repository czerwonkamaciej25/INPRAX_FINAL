/* Basic stuff */

function showVideoControls() {
    videoControls.classList.add('visible');
    videoCurrentTime.textContent = secondsToTimeCode(video.currentTime);
    videoProgressBar.style.transform = `scaleX(${video.currentTime / video.duration})`;
  }
  
  function hideVideoControls() {
    videoControls.classList.remove('visible');
  }
  
  videoControls.addEventListener('click', function(event) {
    if (videoControls.classList.contains('visible')) {
      hideVideoControls();
    } else {
      showVideoControls();
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    showVideoControls();
  });
  
  
  /* Utils */
  
  function secondsToTimeCode(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [
      h,
      m > 9 ? m : '0' + m,
      s > 9 ? s : '0' + s,
    ].filter(Boolean).join(':');
  }
  
  
  /* Custom controls */
  
  video.addEventListener('loadedmetadata', function() {
    console.log('loadedmetadata');
    videoDuration.textContent = secondsToTimeCode(video.duration);
    videoCurrentTime.textContent = secondsToTimeCode(video.currentTime);
    videoProgressBar.style.transform = `scaleX(${video.currentTime / video.duration})`;
  });
  
  playPauseButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  
  video.addEventListener('play', function() {
    console.log('play');
    playPauseButton.classList.add('playing');
    hideVideoControls();
  });
  
  video.addEventListener('pause', function() {
    console.log('pause');
    playPauseButton.classList.remove('playing');
    showVideoControls();
  });
  
  video.addEventListener('ended', function() {
    console.log('ended');
    playPauseButton.classList.remove('playing');
    video.currentTime = 0;
    showVideoControls();
  });
  
  document.addEventListener('fullscreenchange', function() {
    toggleFullscreenButton.classList.toggle('active', document.fullscreenElement);
  });
  
  video.addEventListener('timeupdate', function() {
    console.log('timeupdate');
    if (!videoControls.classList.contains('visible')) {
      return;
    }
    videoCurrentTime.textContent = secondsToTimeCode(video.currentTime);
    videoProgressBar.style.transform = `scaleX(${video.currentTime / video.duration})`;
  });
  
 
  
  /* Fullscreen */
  
  toggleFullscreenButton.addEventListener('click', function(event) {
    event.stopPropagation();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      requestFullscreenVideo();
      lockScreenInLandscape();
    }
  });
  
  function requestFullscreenVideo() {
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else {
      video.webkitEnterFullscreen();
    }
  }
  
  if ('orientation' in screen) {
    screen.orientation.addEventListener('change', function() {
      // Let's automatically request fullscreen if user switches device in landscape mode.
      if (screen.orientation.type.startsWith('landscape')) {
        // Note: It may silently fail in browsers that don't allow requesting
        // fullscreen from the orientation change event.
        // https://github.com/whatwg/fullscreen/commit/e5e96a9da944babf0e246980559cd80a46a300ca
        requestFullscreenVideo();
      } else if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    });
  }
  
  function lockScreenInLandscape() {
    if (!('orientation' in screen)) {
      return;
    }
  
    // Let's force landscape mode only if device is in portrait mode and can be held in one hand.
    if (matchMedia('(orientation: portrait) and (max-device-width: 768px)').matches) {
      screen.orientation.lock('landscape').then(function() {
        // When screen is locked in landscape while user holds device in
        // portrait, let's use the Device Orientation API to unlock screen only
        // when it is appropriate to create a perfect and seamless experience.
        listenToDeviceOrientationChanges();
      });
    }
  }
  
  function listenToDeviceOrientationChanges() {
    if (!('DeviceOrientationEvent' in window)) {
      return;
    }
  
    var previousDeviceOrientation, currentDeviceOrientation;
    window.addEventListener('deviceorientation', function onDeviceOrientationChange(event) {
      // event.beta represents a front to back motion of the device and
      // event.gamma a left to right motion.
      if (Math.abs(event.gamma) > 10 || Math.abs(event.beta) < 10) {
        previousDeviceOrientation = currentDeviceOrientation;
        currentDeviceOrientation = 'landscape';
        return;
      }
      if (Math.abs(event.gamma) < 10 || Math.abs(event.beta) > 10) {
        previousDeviceOrientation = currentDeviceOrientation;
        // When device is rotated back to portrait, let's unlock screen orientation.
        if (previousDeviceOrientation == 'landscape') {
          screen.orientation.unlock();
          window.removeEventListener('deviceorientation', onDeviceOrientationChange);
        }
      }
    });
  }
  
  
  /* Background Playback */
  


  