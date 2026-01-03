function loadComponent(id, file) {
    const container = document.getElementById(id);
    if (!container) return;

    fetch(file)
        .then(res => res.text())
        .then(html => container.innerHTML = html)
        .catch(err => console.error(`Error loading ${file}`, err));
}


document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "components/navbar.html");
    loadComponent("footer", "components/footer.html");
});
