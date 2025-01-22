/** Slår av dobbelt touch zoom funksjon på iphone.  */
/** Slår av dobbeltklikk og pinch-to-zoom funksjon på iPhone. */

/** Hindre dobbeltklikk-zoom på knappen uten å påvirke funksjonaliteten. */

// Velg knappen
const button = document.getElementById('increment-btn');

// Variabel for å spore siste touch-tidspunkt
let lastTouchTime = 0;

// Hindre dobbeltklikk-zoom
button.addEventListener('touchstart', function (event) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTouchTime;

    if (timeDifference < 1000) { // Hvis to klikk skjer innen 300ms
        event.preventDefault(); // Hindre zoom
    }

    lastTouchTime = currentTime;
}, { passive: false }); // Passiv må være false for å kunne bruke preventDefault


// Hindre pinch-to-zoom


/**- ---------------------- end dobbeltouch off ----- */