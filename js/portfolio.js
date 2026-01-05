const container = document.getElementById("portfolioPage");

Object.values(games)
    .filter(game => game.portfolio)
    .forEach(game => {

        const screenshotsHTML = game.screenshots.map(s => `
            <figure>
                <img src="${s.image}" alt="${s.caption}">
                <figcaption>${s.caption}</figcaption>
            </figure>
        `).join("");

        const projectHTML = `
            <section class="portfolio-item">
                <img src="${game.cover}" alt="${game.title} cover">

                <div class="portfolio-info">
                    <h2>${game.title}</h2>
                    <p>${game.description}</p>

                    <ul>
                        ${game.contribution.map(c => `<li>${c}</li>`).join("")}
                    </ul>

                    <span class="tags">${game.tags.join(" · ")}</span>
                </div>

                <div class="project-gallery">
                    ${screenshotsHTML}
                </div>
            </section>
        `;

        container.insertAdjacentHTML("beforeend", projectHTML);
    });


document.addEventListener("click", e => {
    if (e.target.tagName === "IMG" && e.target.closest(".project-gallery")) {
        e.target.classList.toggle("fullscreen");
    }
});
