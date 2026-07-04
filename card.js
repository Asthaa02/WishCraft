// ----------------------------
// Get data from localStorage
// ----------------------------

const name = localStorage.getItem("name");
const occasion = localStorage.getItem("occasion");
const message = localStorage.getItem("message");
const theme = localStorage.getItem("theme");
console.log("Theme =", theme);

// ----------------------------
// Redirect if no data exists
// ----------------------------

if (!name || !occasion || !message || !theme) {
    window.location.href = "index.html";
}

// ----------------------------
// Get HTML elements
// ----------------------------

const title = document.getElementById("occasionTitle");
const recipient = document.getElementById("recipient");
const displayMessage = document.getElementById("message");
const background = document.getElementById("background");
const downloadBtn = document.getElementById("downloadBtn");
const body = document.body;

// ----------------------------
// Set Card Content
// ----------------------------

recipient.innerHTML = `Dear ${name},`;
displayMessage.innerHTML = message;

// ----------------------------
// Theme-specific Decorations
// ----------------------------
const card = document.getElementById("card");
let decorationStart = "";
let decorationEnd = "";

switch (theme) {

    case "blossom":
        card.style.backgroundImage = "url('cards/romantic.jpeg')";
        title.style.color = "#0a0608";
        recipient.style.color = "#0a0608";
        displayMessage.style.color = "#0a0608";
        document.querySelector(".signature").style.color = "#0a0608";
        title.style.fontFamily = "'Great Vibes', cursive";
        recipient.style.fontFamily = "'Lora', serif";
        displayMessage.style.fontFamily = "'Lora', serif";
        document.querySelector(".signature").style.fontFamily = "'Great Vibes', cursive";
        break;

    case "midnight":
        card.style.backgroundImage = "url('cards/minimal.jpeg')";
        title.style.color = "#000000";
        recipient.style.color = "#000000";
        displayMessage.style.color = "#000000";
        document.querySelector(".signature").style.color = "#000000";
        title.style.fontFamily = "'Cormorant Garamond', serif";
        recipient.style.fontFamily = "'Poppins', sans-serif";
        displayMessage.style.fontFamily = "'Poppins', sans-serif";
        document.querySelector(".signature").style.fontFamily = "'Cormorant Garamond', serif";
        break;

    case "royal":
        card.style.backgroundImage = "url('cards/celebration.jpeg')";
        title.style.color = "#111111";
        recipient.style.color = "#111111";
        displayMessage.style.color = "#111111";
        document.querySelector(".signature").style.color = "#111111";
        title.style.fontFamily = "'Cinzel', serif";
        recipient.style.fontFamily = "'Playfair Display', serif";
        displayMessage.style.fontFamily = "'Playfair Display', serif";
        document.querySelector(".signature").style.fontFamily = "'Cinzel', serif";

        break;

    case "vintage":
        card.style.backgroundImage = "url('cards/nature.jpeg')";
        title.style.color = "#5a3b25";
        recipient.style.color = "#3d2b1f";
        displayMessage.style.color = "#3d2b1f";
        document.querySelector(".signature").style.color = "#3d2b1f";
        title.style.fontFamily = "'Parisienne', cursive";
        recipient.style.fontFamily = "'Libre Baskerville', serif";
        displayMessage.style.fontFamily = "'Libre Baskerville', serif";
        document.querySelector(".signature").style.fontFamily = "'Parisienne', cursive";
        break;
}


// ----------------------------
// Set Greeting
// ----------------------------

title.innerHTML =
`${decorationStart} Happy ${occasion}! ${decorationEnd}`;

// ----------------------------
// Download Card
// ----------------------------
console.log(window.domtoimage);
downloadBtn.addEventListener("click", async () => {

    downloadBtn.innerHTML = "Generating...";
    downloadBtn.disabled = true;

    // Wait until Google Fonts finish loading
    await document.fonts.ready;

    domtoimage.toPng(card, {
        quality: 1,
        bgcolor: "transparent",
        cacheBust: true,
        width: card.scrollWidth,
        height: card.scrollHeight,
        style: {
            transform: "scale(1)",
            transformOrigin: "top left"
        }
    })
    .then(function (dataUrl) {

        const link = document.createElement("a");

        link.download = `${occasion}_${name}.png`;

        link.href = dataUrl;

        link.click();

    })
    .catch(function (error) {

        console.error(error);
        alert("Something went wrong while downloading.");

    })
    .finally(() => {

        downloadBtn.innerHTML = "⬇ Download as PNG";
        downloadBtn.disabled = false;

    });

});

