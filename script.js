document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.background = "#333";
        } else {
            header.style.background = "#1f1f1f";
        }
    });
});
