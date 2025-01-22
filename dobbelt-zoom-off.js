/** Slår av dobbeltklikk og pinch-to-zoom funksjon på iPhone. */

// Variabel for å spore tidspunkt for siste touch
let lastTouchTime = 0;

// Hindre dobbeltklikk-zoom
document.addEventListener('touchstart', function (event) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 300) { // Hvis to klikk skjer innen 300ms
        event.preventDefault();
    }

    lastTouchTime = currentTime;
}, { passive: false }); // Passiv må være false for å kunne bruke preventDefault

// Hindre pinch-to-zoom
document.addEventListener('touchmove', function (event) {
    if (event.touches.length > 1) { // Hvis mer enn én finger brukes
        event.preventDefault(); // Hindre zoom
    }
}, { passive: false }); // Passiv må være false for å kunne bruke preventDefault

// Hindre gesture-zoom i nettlesere som støtter gesture-events (f.eks. Safari)
document.addEventListener('gesturestart', function (event) {
    event.preventDefault();
});
document.addEventListener('gesturechange', function (event) {
    event.preventDefault();
});
document.addEventListener('gestureend', function (event) {
    event.preventDefault();
});