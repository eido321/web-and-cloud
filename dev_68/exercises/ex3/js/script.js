
let size = 80;
let delayActive = false;
let selectedCards = [];
class Box {
    constructor() {
        this.width = `${size}px`;
        this.height = `${size}px`;
        size += 20;               //screen limit 960px
        console.log("created");
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
(() => {
    let clickBox = $("#layout3_box");
    clickBox.on("click", () => { boxClick() });
})();
let match = function () {
    if (selectedCards.length == 2) {
        //let boxes = document.querySelectorAll(".box");
        let boxes = $(".box");
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.pointerEvents = "none";
        }
        delayActive = true;
        let firstCard = selectedCards[0];
        let secondCard = selectedCards[1];
        secondCard.style.color = "white";
        if (firstCard.innerHTML == secondCard.innerHTML) {
            firstCard.style.backgroundColor = "red";
            secondCard.style.backgroundColor = "red";
            secondCard.style.color = "white";
            selectedCards = [];
            delayActive = false;
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].style.backgroundColor != "red")
                    boxes[i].style.pointerEvents = "";
            }
        } else {
            setTimeout(() => {
                firstCard.style.color = "";
                secondCard.style.color = "";
                selectedCards = [];
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].style.pointerEvents = "";
                }
            }, 1000);
            delayActive = false;
        }
    }
};
let boxClick = function () {
    for (let i = 0; i < 3; i++) {
        let divObj = document.createElement("div");
        divObj.classList.add("box");
        let b = new Box();
        divObj.style.width = b.getWidth();
        divObj.style.height = b.getHeight();     
    // divObj.style.backgroundColor = "black";
    // divObj.style.display = "flex";
    // divObj.style.position = "relative";
    // divObj.style.gap = "100";
    // divObj.style.justifyContent = "center";
    // divObj.style.alignItems = "center";
    // divObj.style.fontSize = "64px";
    // divObj.style.userSelect = "none";
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    divObj.innerHTML = `${randomLetter}`;
    if (!delayActive) {
        divObj.addEventListener("click", () => {
            divObj.style.pointerEvents = "none";
            divObj.style.color = "white";
            selectedCards.push(divObj);
            match();
        });
    }
    let wrapperObj = $("#wrapper");
    wrapperObj.append(divObj);
    $('.box').css({
        "background-color": "black",
        "display": "flex",
        "position": "relative",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "64px",
        "user-select": "none",
    })
}
};