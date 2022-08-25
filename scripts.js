var duration; // Converter a duração em segundos
var display = document.querySelector("#timer"); // Elemento para exibir o timer
var hours;
var minutes;
var seconds;
var timer;
var interval;
var counterMin = null;
var pauseWatch = new Boolean(true);

window.onload = function() {
    counterMin = prompt("Give an amount of minutes:");
    while(isNaN(counterMin)){
        counterMin = prompt("Please, enter a value greater than 0:");
    }
}

function counter() {
    counterMin = prompt("Give an amount of minutes:");
    while(isNaN(counterMin)){
        counterMin = prompt("Please, enter a value greater than 0:");
    }
    start();
}

function watch() {

    hours = parseInt(timer / 3600, 10);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt((timer % 3600) % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = hours + ":" + minutes + ":" + seconds;

    if (--timer < 0){
       stop();
    }

}

function start(){

    if (counterMin != null) {
        duration = 60 * counterMin;
        timer = duration;
        document.getElementById("start").disabled = true; // Desabilitar botão para evitar mult click
        document.getElementById("start").style.cursor = 'auto';
        interval = setInterval(watch, 1000); // Usar essa função a cada 1 segundo
    } else {
        counter();
    }

}

function pause(){
    
    if(pauseWatch) {
        clearInterval(interval);
    } else {
        interval = setInterval(watch, 1000);
    }
    pauseWatch = !pauseWatch;
}

function stop(){
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.cursor = 'pointer';
    clearInterval(interval);
    display.textContent = "00:00:00";
    counterMin = null;
    console.log(counterMin);
}