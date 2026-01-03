const grid = document.getElementById("gamesGrid");

Object.entries(games).forEach(([id, game]) => {
    const link = document.createElement("a");
    link.href = `game.html?id=${id}`;
    link.className = "game-link";

    const card = document.createElement("div");
    card.className = "game-card";
    card.style.backgroundImage = `url('${game.cover}')`;
    card.dataset.tags = game.tags.map(t => t.toLowerCase()).join(" ");

    const overlay = document.createElement("div");
    overlay.className = "game-overlay";

    overlay.innerHTML = `
        <h3>${game.title}</h3>
        <p>${game.tags.map(tag =>
            tag.charAt(0).toUpperCase() + tag.slice(1)
        ).join(" · ")}</p>
    `;

    card.appendChild(overlay);
    link.appendChild(card);
    grid.appendChild(link);
});
