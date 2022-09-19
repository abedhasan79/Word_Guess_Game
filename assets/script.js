let button = document.getElementById("start");
let guessWord = document.getElementById("word");
let timer = document.getElementById("timer");
let inputBox = document.getElementById("inputBox");
let keyGenWord = document.getElementById("keyGenWord");
let winGame = document.getElementById("win");
let lossGame = document.getElementById("loss");



localStorage.setItem("2", lossGame);
// timer.textContent = "Click Start Game Button!"

let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
let win = localStorage.getItem("win");
let loss= localStorage.getItem("loss");

function startGame() {
    let randomItem = month[Math.floor(Math.random() * month.length)];
    console.log(randomItem);
    let arrayAnswer = [];
    for (let i = 0; i < randomItem.length; i++) {
        arrayAnswer[i] = "_";
    }

    inputBox.addEventListener('keypress', function (e) {
        inputBox.value = e.key;

        for (let j = 0; j < randomItem.length; j++) {
            if (e.key == randomItem.charAt(j)) {
                arrayAnswer[j] = e.key;
                let arrayToString = arrayAnswer.join(" ");
                guessWord.innerHTML = arrayToString;
            }

            if (!arrayAnswer.includes("_")) {
                timer.setAttribute("style", "display:none");
                inputBox.setAttribute("style", "display:none");
                keyGenWord.textContent = "You Win!";
                win++;
                winGame.textContent ="WIN: "+ win;
                localStorage.setItem("win", win);
                
            }


        }
    })


    let count = 10;
    let timeInterval = setInterval(function () {
        timer.textContent = count + " Second Left!";
        count--;
        if (count === 0) {
            clearInterval(timeInterval);
            timer.textContent = "TIMES UP";
            inputBox.setAttribute("style", "display:none");
            if (arrayAnswer.includes("_")) {
                inputBox.setAttribute("style", "display:none");
                keyGenWord.textContent = "You LOST!";
                loss++;
                lossGame.textContent="LOSS: "+loss;
                localStorage.setItem("loss", loss);
            }

        }
    }, 1000)

}


button.addEventListener("click", startGame);
