let button = document.getElementById("start");
let guessWord = document.getElementById("word");
let timer = document.getElementById("timer");
let inputBox = document.getElementById("inputBox");
let keyGenWord = document.getElementById("keyGenWord");


timer.textContent ="Click Start!"

let month=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

function strReplace(str){
    return str.replace(/[a-zA-Z]/g , '-');
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}


function startGame(){
    let randomItem = month[Math.floor(Math.random() * month.length)];
    let dashChar="";
    for(let i=0;i<randomItem.length;i++){
        dashChar += strReplace(randomItem.charAt(i));
    }
    guessWord.textContent = dashChar;
    console.log(randomItem);
    console.log(dashChar);
    console.log(typeof(dashChar));


    let count = 10;
    let timeInterval = setInterval(function(){   
        timer.textContent=count +" Second Left!";
        count--;
        if(count === 0){
            clearInterval(timeInterval);
            timer.textContent ="TIMES UP";
        }
    },1000)

    inputBox.addEventListener('keydown', function(event){
        let valueGenKey= "";
        
        let key = event.key;
        for(let i=0;i<valueGenKey.length;i++){
            if(randomItem.charAt(i)===key){
                dashChar[i]=key;
            }
        }
        inputBox.value=key;
    })
}


button.addEventListener("click", startGame);