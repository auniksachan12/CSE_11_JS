let fontSize = 16;
let isVisible = true;

// Change Heading
function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

// Change Background
function changeBackground() {
    let colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Increase Font Size
function increaseFont() {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
}

// Show/Hide Paragraph
function toggleParagraph() {
    let para = document.getElementById("para");
    if (isVisible) {
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
    isVisible = !isVisible;
}

// Reset Page
function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f2f2f2";
    document.getElementById("para").style.fontSize = "16px";
    document.getElementById("para").style.display = "block";
    document.getElementById("inputText").value = "";
    fontSize = 16;
    isVisible = true;
}