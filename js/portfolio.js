const container = document.getElementById("portfolioPage");

Object.values(games)
    .filter(game => game.portfolio)
    .forEach(game => {

        const screenshotsHTML = game.screenshots.map(s => `
            <figure>
                <img src="${s.image}" alt="${s.caption}" data-lightbox>
                <figcaption>${s.caption}</figcaption>
            </figure>
        `).join("");

        const projectHTML = `
            <section class="portfolio-item">

                <div class="portfolio-header">
                    <img src="${game.cover}" alt="${game.title} cover">

                    <div class="portfolio-info">
                        <h2>${game.title}</h2>
                        <p>${game.description}</p>

                        <ul>
                            ${game.contribution.map(c => `<li>${c}</li>`).join("")}
                        </ul>

                        <span class="tags">${game.tags.join(" · ")}</span>
                    </div>
                </div>

                <div class="project-gallery">
                    ${screenshotsHTML}
                </div>

            </section>
        `;


        container.insertAdjacentHTML("beforeend", projectHTML);
    });
