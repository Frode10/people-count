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
    const min = 250; // Lys minimumsverdi
    const randomValue = Math.floor(Math.random() * (256 - min) + min); // Generer lys intensitet

    // Rotasjon mellom røde, grønne og blå nyanser
    let randomR = 0, randomG = 0, randomB = 0;
    if (colorMode === 0) { // Rød dominerer
        randomR = randomValue;
        randomG = Math.floor(Math.random() * 245); // Lav grønn
        randomB = Math.floor(Math.random() * 245); // Lav blå
    } else if (colorMode === 1) { // Grønn dominerer
        randomG = randomValue;
        randomR = Math.floor(Math.random() * 245); // Lav rød
        randomB = Math.floor(Math.random() * 245); // Lav blå
    } else if (colorMode === 2) { // Blå dominerer
        randomB = randomValue;
        randomR = Math.floor(Math.random() * 245); // Lav rød
        randomG = Math.floor(Math.random() * 245); // Lav grønn
    }

    // Oppdater for neste farge
    colorMode = (colorMode + 1) % 3; // Roter mellom 0, 1, 2

    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}