const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// Open lightbox
document.addEventListener("click", (e) => {
    const img = e.target.closest("[data-lightbox]");

    if (!img) return;

    lightboxImg.src = img.src;
    lightbox.classList.add("open");
});

// Close on background click
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
});

// Close on ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
    }
});
