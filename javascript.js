let container = document.querySelector("#container");
let fragment = document.createDocumentFragment();
let gridSize = 0

while (gridSize < 1) {
    gridSize = prompt("Please enter a desired grid size.");

    if (gridSize < 1 || gridSize > 100) {
        gridSize = 0;
    }
}
container.style.setProperty("--gridSize", gridSize);

for (i = 0; i < (gridSize*gridSize); i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "gray";
    square.classList.add("square")
    fragment.appendChild(square);
}

container.appendChild(fragment);

let isDrawing = false;
let squares = document.querySelectorAll(".square");

container.addEventListener("mousedown", () => isDrawing = true)
container.addEventListener("mouseup", () => isDrawing = false)

squares.forEach(square => {

    square.addEventListener("mouseover", () => {
        if (isDrawing) {
            square.style.backgroundColor = "white";
        }
    })

    square.addEventListener("click", () => {
        square.style.backgroundColor = "white";
    })
})
