let size = 80
let delayActive = false;
let selectedCards = [];
(() => {
    let clickBox = $("#layout3_box");
    clickBox.on("click", () => { boxClick() });
    window.addEventListener('resize', () => {
        resizeBox();
    });
})();
console.log($(window).width());

class Box {
    constructor() {
        let leftWidth = $('#layout3_side_left').width();
        let rightWitdth = $('#layout3_side_right').width();
        let pageWidth = $(window).width();
        let widthWrapper = pageWidth - rightWitdth - leftWidth - 132;
        if ($(window).width() <= 767)
            widthWrapper = pageWidth;
        this.width = `${size}px`;
        this.height = `${size}px`;
        if (size < widthWrapper)
            size += 20;
        console.log("created");
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }

}
let match = function () {
    if (selectedCards.length == 2) {
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
let randomLetter;
let boxClick = function () {
    for (let i = 0; i < 3; i++) {
        let boxes = $(".box");
        let divObj = document.createElement("div");
        divObj.classList.add("box");
        let b = new Box();
        divObj.style.width = b.getWidth();
        divObj.style.height = b.getHeight();
        divObj.watched = false;
        if (boxes.length % 2 == 0)
            randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        divObj.innerHTML = `${randomLetter}`;
        if (!delayActive) {
            divObj.addEventListener("click", () => {
                divObj.watched = true;
                divObj.style.pointerEvents = "none";
                divObj.style.color = "white";
                selectedCards.push(divObj);
                match();
            });
        }
        let wrapperObj = $("#wrapper");
        wrapperObj.append(divObj);

    }
    $('.box').css({
        "background-color": "black",
        "display": "flex",
        "position": "relative",
        "justify-content": "center",
        "align-items": "center",
        "font-size": "64px",
        "user-select": "none",
    })
    let boxes = $(".box");
    boxes.each(function () {
        // Get a random box to swap with
        let randomIndex = Math.floor(Math.random() * boxes.length);
        let randomBox = boxes.eq(randomIndex);
      
        // Swap the inner HTML of the current box with the inner HTML of the random box
        let temp = $(this).html();
        $(this).html(randomBox.html());
        randomBox.html(temp);
    });
};
let resizeBox = function () {
    let boxes = $(".box");
    let leftWidth = $('#layout3_side_left').width();
    let rightWitdth = $('#layout3_side_right').width();
    let pageWidth = $(window).width();
    let widthWrapper = pageWidth;
    console.log(pageWidth);
    if ($(window).width() > 767)
        widthWrapper = widthWrapper - leftWidth - rightWitdth - 132;
    size = 80;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.width = `${size}px`;
        boxes[i].style.height = `${size}px`;
        if (size < widthWrapper)
            size += 20;
    }
};
