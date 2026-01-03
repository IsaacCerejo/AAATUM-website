const buttons = document.querySelectorAll(".filter-btn");
const cards = () => document.querySelectorAll(".game-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        cards().forEach(card => {
            const tags = card.dataset.tags;

            if (filter === "all" || tags.includes(filter)) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }
        });
    });
});
