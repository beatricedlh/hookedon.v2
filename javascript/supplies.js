function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay
}
