const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.classList.add("flip");
    });

    card.addEventListener("mouseout", () => {
        card.classList.remove("flip");
    });
});
