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

let squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "white";
    })   
})
