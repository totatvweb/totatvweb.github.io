// ESPERAR A QUE CARGUE LA PAGINA
window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.remove("loading");
    }, 1000);
});

// DROPDOWN MENU DEL HEADER
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".header-nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});