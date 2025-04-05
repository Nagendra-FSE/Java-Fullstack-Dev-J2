document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.backgroundColor = "#ddd";
        });
        section.addEventListener("mouseout", () => {
            section.style.backgroundColor = "white";
        });
    });
});