// Resize box using 'this'
function resizeBox(element) {
    element.style.width = "220px";
    element.style.height = "220px";
    element.style.backgroundColor = "seagreen";
}

// Change text using 'this'
function changeText(element) {
    element.innerText = "Text has been changed!";
    element.style.color = "purple";
}

// Toggle button color using 'this'
function toggleBackground(btn) {
    btn.style.backgroundColor =
        btn.style.backgroundColor === "orange" ? "#333" : "orange";
}

// Hide / Show text
function hideText() {
    let text = document.querySelector(".text");
    text.style.display =
        text.style.display === "none" ? "block" : "none";
}

// Move circle on hover using 'this'
function moveCircle(circle) {
    circle.style.transform = "translateX(120px)";
    circle.style.backgroundColor = "gold";
}

// Rotate icon using 'this'
function rotateIcon(icon) {
    icon.style.transform = "rotate(360deg)";
}
