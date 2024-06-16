//Write your code here

function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Set the width and height with "px" units
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';

    // Set the text content
    newDiv.textContent = text;

    // Get the container div
    const container = document.getElementById('container');

    // Append the new div to the container
    container.appendChild(newDiv);
}

// Example usage:
createDiv(200, 100, "Hello, World!");
createDiv(150, 150, "Another Div");



// Do not change this code
Window.createDiv = createDiv;