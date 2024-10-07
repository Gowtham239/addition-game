const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const resetBtn = document.getElementById("resetBtn");
const checkBtn = document.getElementById("checkBtn");
const userInput = document.getElementById("userInput");
const message = document.getElementById("message");

function reset() {
    const randomNumOne = Math.floor(Math.random() * 50);
    const randomNumTwo = Math.floor(Math.random() * 50);
    numOne.textContent = randomNumOne;
    numTwo.textContent = randomNumTwo;
    userInput.value = "";
    message.textContent = "";
    message.style.backgroundColor = "";
}
// reset();
// console.log(numOne.textContent);
// console.log(numTwo.textContent);


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





