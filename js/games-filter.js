const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".game-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");

        cards.forEach(card => {
            const tags = card.dataset.tags;

            if (filter === "all" || tags.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
