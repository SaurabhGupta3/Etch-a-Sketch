function createGrid(size) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    square.style.width = `${squareSize}px `;
    square.style.height = `${squareSize}px `;

    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = getRandomColor();
    });

    container.appendChild(square);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(16);

function resetGrid() {
  let gridSize = prompt("Enter the number of squares per side (max 100):", 16);
  gridSize = parseInt(gridSize);

  if (gridSize >= 1 && gridSize <= 100) {
    createGrid(gridSize);
  } else {
    alert("Invalid grid size! Please enter a number between 1 and 100.");
  }
}
document.getElementById("resetGrid").addEventListener("click", resetGrid);
