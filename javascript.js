let input = document.querySelector("form");
let gridSize;

input.addEventListener("submit", function(event) {
    event.preventDefault();
    gridSize = input.querySelector("#gridSize").value;
    if (gridSize > 0 && gridSize < 101) {
        input.querySelector("#gridSize").value = "";
        input.querySelector("#gridSize").blur();
        createGrid(gridSize);
        console.log('success');
    }
    else {
        input.classList.add("shake-animation");
        console.log('failure');
        input.addEventListener("animationend", () => {
            input.classList.remove("shake-animation");
        })
    }
})

let clearbutton = document.querySelector("#clearscreen");

clearbutton.addEventListener("click", () => {
    createGrid(gridSize);
})


function createGrid(val) {
    console.log("grid generated");
    let container = document.querySelector("#container");
    let fragment = document.createDocumentFragment();
    let gridSize = val;

    container.innerText = "";
    container.style.setProperty("--gridSize", gridSize);

    for (i = 0; i < (gridSize*gridSize); i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "beige";
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
                square.style.backgroundColor = "gray";
            }
        })

        square.addEventListener("click", () => {
            square.style.backgroundColor = "gray";
        })
    })
}
