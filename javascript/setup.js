function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
}

function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide the overlay
}

window.addEventListener('load', () => {
    const divs = document.querySelectorAll('#outline > div');
    let maxHeight = 0;

    // Find the height of the tallest div
    divs.forEach((div) => {
        const height = div.getBoundingClientRect().height;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set the height of all divs to the height of the tallest div
    divs.forEach((div) => {
        div.style.height = `${maxHeight}px`;
    });
});

window.addEventListener('load', () => {
    const divs = document.querySelectorAll('#outline2 > div');
    let maxHeight = 0;

    // Find the height of the tallest div
    divs.forEach((div) => {
        const height = div.getBoundingClientRect().height;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set the height of all divs to the height of the tallest div
    divs.forEach((div) => {
        div.style.height = `${maxHeight}px`;
    });
});

window.addEventListener('load', () => {
    const divs = document.querySelectorAll('#outline3 > div');
    let maxHeight = 0;

    // Find the height of the tallest div
    divs.forEach((div) => {
        const height = div.getBoundingClientRect().height;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set the height of all divs to the height of the tallest div
    divs.forEach((div) => {
        div.style.height = `${maxHeight}px`;
    });
});

