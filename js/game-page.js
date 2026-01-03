const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const game = games[gameId];
const container = document.getElementById("gamePage");

if (!game) {
    container.innerHTML = "<p>Game not found.</p>";
} else {
    container.innerHTML = `
        <section class="game-hero">
            <img src="${game.cover}" alt="${game.title} cover">

            <div class="game-meta">
                <h1>${game.title}</h1>
                <p class="game-tags">${game.tags.join(" · ")}</p>
                <a class="play-button" href="${game.itch}" target="_blank">
                    ▶ Play on itch.io
                </a>
            </div>
        </section>

        <section class="game-section">
            <h2>About the Game</h2>
            <p>${game.description}</p>
        </section>

        <section class="game-section">
            <h2>My Contribution</h2>
            <ul>
                ${game.contribution.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </section>

        <section class="game-section">
            <h2>Tools & Technologies</h2>
            <p>${game.tools.join(" · ")}</p>
        </section>
    `;
}
