const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const resetBtn = document.getElementById("resetBtn");
const checkBtn = document.getElementById("checkBtn");
const userInput = document.getElementById("userInput");
const message = document.getElementById("message");
const startBtn = document.getElementById("start");


function generateRandomNumber() {
    const randomNumOne = Math.floor(Math.random() * 50);
    const randomNumTwo = Math.floor(Math.random() * 50);
    numOne.textContent = randomNumOne;
    numTwo.textContent = randomNumTwo;
}


function start() {
    if(numOne.textContent === "" && numTwo.textContent === "") {
        generateRandomNumber();
    }
}

function reset() {
    
    generateRandomNumber();
    userInput.value = "";
    message.textContent = "";
    message.style.backgroundColor = "";
}
// reset();

function sumOfTwoNums() {
    let one = parseInt(numOne.textContent);
    let two = parseInt(numTwo.textContent);

    let result = one + two;
    
    if(parseInt(userInput.value) === result) {
        message.textContent = "Correct Answer"
        message.style.backgroundColor = "green";

        console.log(true);
    } else {
        message.textContent = "Try again!";
        message.style.backgroundColor = "red";

        console.log(false);
        
    }

}


resetBtn.addEventListener("click", reset);
checkBtn.addEventListener("click", sumOfTwoNums);
startBtn.addEventListener("click", start)





