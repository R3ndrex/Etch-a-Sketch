const container = document.querySelector(".container");
const button = document.querySelector(".change-resolution");
createGrid(16);

function hoverRandomColor(element) {
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
        container.appendChild(linecontainer);
        for (let j = 0; j < amount; j++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("box");
            hoverRandomColor(newDiv);
            hoverDarkening(newDiv);
            linecontainer.appendChild(newDiv);
        }
    }
}

button.addEventListener("click", () => {
    let amount = Number(prompt("Enter your amount of boxes", 16));
    if (amount > 100) {
        console.error("Too much boxes!");
    } else {
        while (container.lastChild) {
            container.removeChild(container.lastChild);
        }
        createGrid(amount);
    }
});
