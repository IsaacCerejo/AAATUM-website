function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(file)
        .then(res => res.text())
        .then(html => {
            container.innerHTML = html;
            if (id === "navbar") {
                initNavbar();
                setupPaletteToggle();
            }
        })
        .catch(err => console.error(`Error loading ${file}`, err));
}

function loadHead(file) {
    fetch(file)
        .then(res => res.text())
        .then(html => {
            document.head.insertAdjacentHTML("beforeend", html);
        })
        .catch(err => console.error("Error loading head:", err));
}

function initNavbar() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

function setupPaletteToggle() {
    const toggleBtn = document.querySelector(".palette-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        const html = document.documentElement;
        const current = html.getAttribute("data-palette");

        const next = current === "default" ? "alt" : "default";
        html.setAttribute("data-palette", next);

        // ✅ Save palette
        localStorage.setItem("palette", next);
    });
}


function initPalette() {
    const html = document.documentElement;
    const savedPalette = localStorage.getItem("palette") || "default";
    html.setAttribute("data-palette", savedPalette);
}




document.addEventListener("DOMContentLoaded", () => {
    initPalette();
    loadHead("components/head.html");
    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");

});


