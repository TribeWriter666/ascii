const canvas = document.getElementById("canvas");

// ASCII art characters
const characters = ['@', '#', '$', '%', '&', '*', '+', '=', '-', ':', ';', '<', '>', '?'];

// Randomly select ASCII character
function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

// Create ASCII art
function createAsciiArt() {
  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * 500) + "px";
    div.style.top = Math.floor(Math.random() * 500) + "px";
    div.style.fontSize = Math.floor(Math.random() * 50) + "px";
    div.style.color = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
    div.style.transform = "translateZ(" + Math.floor(Math.random() * 500) + "px)";
    div.innerHTML = getRandomChar();
    canvas.appendChild(div);
  }
}

// Animate ASCII art
function animateAsciiArt() {
  let elements = document.querySelectorAll("#canvas div");
  elements.forEach(function(element) {
    let x = parseInt(element.style.left);
    let y = parseInt(element.style.top);
    let size = parseInt(element.style.fontSize);
    let z = parseInt(element.style.transform.split("(")[1].split("px")[0]);
    if (x + size > 500 || x < 0) {
      element.speedX = -element.speedX;
    }
    if (y + size > 500 || y < 0) {
      element.speedY = -element.speedY;
    }
    if (z > 500 || z < 0) {
      element.speedZ = -element.speedZ;
    }
    element.style.left = x + element.speedX + "px";
    element.style.top = y + element.speedY + "px";
    element.style.transform = "translateZ(" + (z + element.speedZ) + "px)";
    element.style.fontSize = (500 - z) / 10 + "px";
  });
}

createAsciiArt();
setInterval(animateAsciiArt, 50);
