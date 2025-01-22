

// Hent HTML-elementer
let countEL = document.getElementById("count-el");
let count = 0;

// Increment funksjon
function increment() {
    count = count + 1; // Øk telleren med 1
    countEL.innerText = count; // Oppdater teksten i count-el

    // Generer en tilfeldig bakgrunnsfarge
    const randomColor = generateRandomColor();
    countEL.style.backgroundColor = randomColor; // Sett bakgrunnsfargen til count-el
}

// Fade-effekt for knappen
function fadeEffect() {
    const button = document.getElementById("increment-btn"); // Riktig ID

    // Sett bakgrunnsfargen til lysgrønn
    button.style.backgroundColor = "lightgreen";

    // Etter en liten forsinkelse, sett fargen tilbake til original
    setTimeout(() => {
        button.style.backgroundColor = "rgb(18, 96, 192)";
    }, 500); // Fargen fades tilbake etter 500ms
}

// Funksjon for å generere en tilfeldig farge
let colorMode = 0; // Rotasjonsvariabel: 0 = rød, 1 = grønn, 2 = blå

function generateRandomColor() {
    const min = 200; // Lys minimumsverdi
    const randomValue = Math.floor(Math.random() * (256 - min) + min); // Generer lys intensitet

    let randomR = 0, randomG = 0, randomB = 0;

    if (colorMode === 0) { // Rød dominerer
        randomR = randomValue;
        randomG = Math.floor(Math.random() * 100);
        randomB = Math.floor(Math.random() * 100);
    } else if (colorMode === 1) { // Grønn dominerer
        randomG = randomValue;
        randomR = Math.floor(Math.random() * 100);
        randomB = Math.floor(Math.random() * 100);
    } else if (colorMode === 2) { // Blå dominerer
        randomB = randomValue;
        randomR = Math.floor(Math.random() * 100);
        randomG = Math.floor(Math.random() * 100);
    }

    colorMode = (colorMode + 1) % 3; // Roter mellom 0, 1, 2
    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}


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

    if (timeDifference < 300) { // Hvis to klikk skjer innen 300ms
        event.preventDefault(); // Hindre zoom
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

/**- ---------------------- end dobbeltouch off ----- */