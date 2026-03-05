let container = document.querySelector("#container");
let fragment = document.createDocumentFragment()

for (i = 0; i < 6400; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "gray";
    square.style.height = "10px";
    square.style.width = "10px";
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
