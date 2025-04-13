const counter = document.getElementById('count');

let countNum = 0;
function Increase() {
    countNum++;
    counter.textContent = countNum;
    console.log(countNum);
}

function Decrease() {
    countNum--;
    counter.textContent = countNum;
    console.log(countNum);
}

function Reset() {
    countNum = 0;
    counter.textContent = countNum;
    console.log(countNum);
}