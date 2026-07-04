// ----------------------------
// Get data from localStorage
// ----------------------------

const name = localStorage.getItem("name");
const occasion = localStorage.getItem("occasion");
const message = localStorage.getItem("message");
const theme = localStorage.getItem("theme");

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

card.style.backgroundImage =
"url('romantic.jpeg')";

break;

case "midnight":

card.style.backgroundImage =
"url('minimal.jpeg')";

break;

case "royal":

card.style.backgroundImage =
"url('celebration.jpeg')";

break;

case "vintage":

card.style.backgroundImage =
"url('nature.jpeg')";

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

downloadBtn.addEventListener("click", () => {

    const card = document.getElementById("card");

    html2canvas(card, {

        scale: 3,
        useCORS: true

    }).then(canvas => {

        const link = document.createElement("a");

        link.download = `${occasion}_Card.png`;

        link.href = canvas.toDataURL("image/png");

        link.click();

    });

});