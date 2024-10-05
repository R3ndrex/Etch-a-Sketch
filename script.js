const container = document.querySelector(".container");
const buttonResolution = document.querySelector(".change-resolution");
const buttonClear = document.querySelector(".clear-button");
createGrid(16);

function hoverColor(element) {
    element.addEventListener("mouseenter", () => {
        element.style["background-color"] = `rgb(${
            Math.floor(Math.random() * 255) + 1
        },${Math.floor(Math.random() * 255) + 1},${
            Math.floor(Math.random() * 255) + 1
        })`;
    });
}

function hoverDarkening(element) {
    element.addEventListener("mouseenter", () => {
        element.style["opacity"] = Number(element.style["opacity"]) + 0.1;
    });
}

function createGrid(amount) {
    for (let i = 0; i < amount; i++) {
        container.style["grid-template-columns"] = `repeat(${amount}, 1fr)`;
        container.style["grid-template-rows"] = `repeat(${amount}, 1fr)`;
        for (let j = 0; j < amount; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("box");
            hoverColor(newDiv);
            hoverDarkening(newDiv);
            container.appendChild(newDiv);
        }
    }
}

function clearGrid(element) {
    let children = element.querySelectorAll(".box");
    children.forEach((child) => {
        child.style["background-color"] = "white";
        child.style["opacity"] = 0.1;
    });
}

buttonResolution.addEventListener("click", () => {
    let amount = Number(prompt("Enter your amount of boxes", 16));
    if (amount === 0 || isNaN(amount)) {
        amount = 16;
    }
    if (amount > 100) return alert("Too much boxes!");

    container.innerHTML = "";
    createGrid(amount);
});

buttonClear.addEventListener("click", () => clearGrid(container));
