function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(file)
        .then(res => res.text())
        .then(html => {
            container.innerHTML = html;
            if (id === "navbar") {
                initNavbar();
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

document.addEventListener("DOMContentLoaded", () => {
    loadHead("components/head.html");
    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");
});


