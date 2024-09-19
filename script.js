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
        const linecontainer = document.createElement("div");
        linecontainer.classList.add("line-container");
        container.appendChild(linecontainer);
        for (let j = 0; j < amount; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("box");
            hoverColor(newDiv);
            hoverDarkening(newDiv);
            linecontainer.appendChild(newDiv);
        }
    }
}

function clearGrid(element) {
    let children = element.querySelectorAll(".box");
    for (let i = 0; i < children.length; i++) {
        children[i].style["background-color"] = "white";
        children[i].style["opacity"] = 0.1;
    }
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
