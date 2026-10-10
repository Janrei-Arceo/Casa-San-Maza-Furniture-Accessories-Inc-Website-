function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const button = document.querySelector(".menu-toggle");

    if (menu && button) {
        const isOpen = menu.classList.toggle("show");
        button.setAttribute("aria-expanded", isOpen);
        button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        button.textContent = isOpen ? "×" : "☰";
    }
}

const navLinks = document.querySelectorAll("#nav-menu a");
const navLinkArray = Array.from(navLinks);

for (let i = 0; i < navLinkArray.length; i++) {
    navLinkArray[i].addEventListener("click", function () {
        const menu = document.getElementById("nav-menu");
        const button = document.querySelector(".menu-toggle");

        if (menu && button) {
            menu.classList.remove("show");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Open menu");
            button.textContent = "☰";
        }
    });
}