const botao = document.getElementById('removerBotao');
const seta = document.querySelector('.seta');

function playOnClick() {
    var globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("roleta"),
        btnStop: document.getElementById("btnStop"),
        timeInitial: new Date()
    };

    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.btnStop.style.visibility = "visible";
    globalObjects.roleta.style.animation = "roleta 0.00001s linear infinite";

    document.body.classList.add('red-filter');

    seta.classList.toggle('removerSeta');

    removeBodyContent(globalObjects);
}

function calculate(globalObjects) {
    var timeFinal = new Date();
    var tempo = Math.abs(timeFinal - globalObjects.timeInitial);
    var box = parseInt(tempo / 250);
    if (box > 7)
        box = parseInt(box % 8);

    console.log(globalObjects.timeInitial, timeFinal, tempo, box, (tempo / 250));
    return box;
}

function stopOnClick() {
    globalObjects.roleta.style["animation-play-state"] = "paused";
    globalObjects.btnStop.style.visibility = "hidden";
    var box = calculate(globalObjects);
    var boxGanhador = document.getElementById("opt".concat(box));
    document.getElementById("msgGanhador").innerHTML = "Parabéns! Você ganhou ".concat(boxGanhador.innerHTML);
}

var elementos = document.querySelectorAll("html, body");

function removeBodyContent(globalObjects) {
    setTimeout(function() {
        document.body.style.backgroundImage = "none";
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "black";
        elementos.forEach(function(elemento) {
            elemento.style.backgroundImage = "none";
        });
	document.body.classList.remove('red-filter');

        setTimeout(function() {
            var textElement = document.createElement("div");
            textElement.innerHTML = "-. ..- -. -.-. .- / -- . -..- .- / -. .- / -- .. -. .... .- / .-. --- .-.. . - .- .-.-.-";
            textElement.style.color = "white";
            textElement.style.textAlign = "center";
            textElement.style.position = "absolute";
            textElement.style.top = "50%";
            textElement.style.left = "50%";
            textElement.style.transform = "translate(-50%, -50%)";

            document.body.appendChild(textElement);

            setTimeout(function() {
                textElement.remove();
                window.close();
            }, 3000);
        }, 1000);
    }, 5000);
}


