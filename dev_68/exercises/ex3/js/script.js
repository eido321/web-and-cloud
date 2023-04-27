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
        let widthWrapper = pageWidth - rightWitdth - leftWidth - 132;       //giving the box it's size while makeing sure it can go past the size of the wrapper plus the marging that we need
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
            boxes[i].style.pointerEvents = "none";              //removing the possibility of a third click happening
        }
        delayActive = true;
        let firstCard = selectedCards[0];
        let secondCard = selectedCards[1];
        secondCard.style.color = "white";
        if (firstCard.innerHTML == secondCard.innerHTML) {      //checking for a match in cards
            $('.counter').text(++counter);
            firstCard.style.backgroundColor = "red";
            secondCard.style.backgroundColor = "red";
            secondCard.style.color = "white";
            selectedCards = [];
            delayActive = false;
            for (let i = 0; i < boxes.length; i++) {
                if (boxes[i].style.backgroundColor != "red")
                    boxes[i].style.pointerEvents = "";              //restoring click functionality 
            }
        } else {
            setTimeout(() => {                                      //showing the letters for a second 
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
            $(divObj).on("click", () => {                   //adding the click possibility on every card
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
    boxes.each(function () {                            //shuffling the letters in the unwatched cards
        if ($(this).data('watched') == false) {  
            let randomIndex = Math.floor(Math.random() * boxes.length);
            let randomBox = boxes.eq(randomIndex);
            if ($(randomBox).data('watched') == false) {  
                let temp = $(this).html();
                $(this).html(randomBox.html());
                randomBox.html(temp);
            }
        }
    });
};
let resizeBox = function () {                               //making sure that you can make any amout of boxes you want
    let boxes = $(".box");                                  //and the boxes will resize themself with new limit of the
    let leftWidth = $('#layout3SideLeft').width();          //new wrapper its inside of.
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