const flipCards = document.querySelectorAll(".card");

flipCards.forEach(card => {
    card.addEventListener("mouseover", () => {
        console.log("Flip added");
        card.classList.add("flip");
    });

    card.addEventListener("mouseout", () => {
        console.log("Flip removed");
        card.classList.remove("flip");
    });
});

const audioCards = document.querySelectorAll(".card");

audioCards.forEach((card, index) => {
    const audio = document.getElementById(`audio${index + 1}`);
    let fadeInInterval, fadeOutInterval;

    // Configurar o volume inicial para 0.1
    audio.volume = 0.1;
    audio.pause(); // Garantir que o áudio esteja pausado inicialmente

    card.addEventListener("mouseover", () => {
        console.log(`Fading in audio ${index + 1}`);
        clearInterval(fadeOutInterval); // Interrompe o fade out se estiver ocorrendo
        
        // Reproduz o áudio se estiver pausado e inicia o fade in
        if (audio.paused) {
            audio.play().catch(error => console.log('Play failed:', error));
        }
        
        fadeInInterval = setInterval(() => {
            if (audio.volume < 0.1) { // Ajusta para 0.1
                audio.volume = Math.min(audio.volume + 0.01, 0.1); // Aumenta o volume até 0.1
            } else {
                clearInterval(fadeInInterval); // Para o fade in ao atingir o volume máximo
            }
        }, 50); // Intervalo de 50ms para suavidade
    });

    card.addEventListener("mouseout", () => {
        console.log(`Fading out audio ${index + 1}`);
        clearInterval(fadeInInterval); // Interrompe o fade in se estiver ocorrendo

        fadeOutInterval = setInterval(() => {
            if (audio.volume > 0.0) { // Diminui o volume até 0.0
                audio.volume = Math.max(audio.volume - 0.01, 0.0); // Diminui o volume até 0.0
            } else {
                clearInterval(fadeOutInterval); // Para o fade out ao atingir o volume mínimo
                audio.pause(); // Pausa o áudio quando o volume chega a 0.0
            }
        }, 50); // Intervalo de 50ms para suavidade
    });
});
