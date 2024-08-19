const countdownDate = new Date("2025-08-20T00:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Verifica se a contagem chegou a zero
    if (distance < 0) {
        clearInterval(countdownInterval); // Para o intervalo
        document.querySelector(".countdown-container").innerHTML = "<h1>Contagem Regressiva Finalizada</h1>";
        return; // Encerra a função para que não haja atualizações adicionais
    }

    // Calcula dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60 )) / 1000);

    // Atualiza o conteúdo dos elementos HTML
    daysElement.innerText = days;
    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
}

// Inicializa a contagem regressiva a cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);