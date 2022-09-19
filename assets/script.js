let button = document.getElementById("start");
let guessWord = document.getElementById("word");
let timer = document.getElementById("timer");
let inputBox = document.getElementById("inputBox");
let keyGenWord = document.getElementById("keyGenWord");


timer.textContent = "Click Start!"

let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];


let randomItem = month[Math.floor(Math.random() * month.length)];
console.log(randomItem);
let arrayAnswer = [];
for (let i = 0; i < randomItem.length; i++) {
    arrayAnswer[i] = "_";
}




function startGame() {

    inputBox.addEventListener('keypress', function(e){
        inputBox.value=e.key;
        
        for (let j = 0; j < randomItem.length; j++) {
            if (e.key == randomItem.charAt(j)) {
            arrayAnswer[j]=e.key;
            let arrayToString = arrayAnswer.join(" ");
            guessWord.innerHTML = arrayToString;
        }
        
        if(!arrayAnswer.includes("_")){
            timer.setAttribute("style","display:none");
            inputBox.setAttribute("style", "display:none");
            keyGenWord.textContent = "You Win!";
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
            
        }
    }, 1000)

}


button.addEventListener("click", startGame);
