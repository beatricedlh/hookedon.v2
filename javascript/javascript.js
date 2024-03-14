window.addEventListener('load', function () {
    var loadingScreen = document.getElementById('loading-screen');
  
    setTimeout(function () {
      loadingScreen.style.animation = 'fadeOut 1s ease-out forwards'; // Fade out the loading screen after 1 second
    }, 1000);
});


function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}

function scrollToMiddle() {
    var scrollPosition = window.innerHeight * 0.7; // Adjust as needed
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
}
