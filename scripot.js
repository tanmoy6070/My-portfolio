// Welcome message in browser console
console.log("Welcome to Tanmoy Sarkar's Portfolio!");

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.style.color = "";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#58a6ff";
        }
    });
});

// Small animation when page loads
window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "0";
    document.querySelector(".hero-content").style.transform = "translateY(30px)";

    setTimeout(() => {
        document.querySelector(".hero-content").style.transition = "all 0.8s ease";
        document.querySelector(".hero-content").style.opacity = "1";
        document.querySelector(".hero-content").style.transform = "translateY(0)";
    }, 200);
});