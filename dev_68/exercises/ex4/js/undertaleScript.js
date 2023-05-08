let helpMsg = document.querySelector("#help");
let svgs = [
    "images/undertale_text_box2.svg",
    "images/undertale_text_box3.svg",
    "images/undertale_text_box1.svg"
];
let currentSvgIndex = 0;

function startHelp() {
    let currentSvg = new Image();
    currentSvg.src = svgs[currentSvgIndex];
    currentSvg.onload = function () {
        helpMsg.style.backgroundImage = `url(${currentSvg.src})`;
        currentSvgIndex = (currentSvgIndex + 1) % svgs.length;
    }
}
setInterval(startHelp, 4000);
