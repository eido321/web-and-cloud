let size = 80
let delayActive = false;
let selectedCards = [];
let counter = 0;
(() => {
    let clickBox = $("#layout3Box");
    clickBox.on("click", () => { boxClick() });
    window.addEventListener('resize', () => {
        resizeBox();
    });
})();
class Box {
    constructor() {
        let leftWidth = $('#layout3SideLeft').width();
        let rightWitdth = $('#layout3SideRight').width();
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
            $('.counter').text(++counter);
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
        divObj.style.backgroundColor = "black";
        divObj.style.display = "flex";
        divObj.style.position = "relative";
        divObj.style.justifyContent = "center";
        divObj.style.alignItems = "center";
        divObj.style.fontSize = "64px";
        divObj.style.userSelect = "none";
        $(divObj).data('watched', false);
        if (boxes.length % 2 == 0)
            randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        divObj.innerHTML = `${randomLetter}`;
        if (!delayActive) {
            $(divObj).on("click", () => {
                $(divObj).data('watched', true);
                divObj.style.pointerEvents = "none";
                divObj.style.color = "white";
                selectedCards.push(divObj);
                match();
            });
        }
        let wrapperObj = $("#wrapper");
        wrapperObj.append(divObj);

    }
    let boxes = $(".box");
    boxes.each(function () {
        if ($(this).data('watched') == false) {  // Check if the box has been watched before
            let randomIndex = Math.floor(Math.random() * boxes.length);
            let randomBox = boxes.eq(randomIndex);
            if ($(randomBox).data('watched') == false) {  // Check if the random box has been watched before
                let temp = $(this).html();
                $(this).html(randomBox.html());
                randomBox.html(temp);
            }
        }
    });
};
let resizeBox = function () {
    let boxes = $(".box");
    let leftWidth = $('#layout3SideLeft').width();
    let rightWitdth = $('#layout3SideRight').width();
    let pageWidth = $(window).width();
    let widthWrapper = pageWidth;
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