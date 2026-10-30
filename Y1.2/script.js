// Рік у підвалі сайту
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Плавне закриття навігації після переходу за посиланням (для мобільних пристроїв)
const navLinks = document.getElementById("navLinks");
if (navLinks) {
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("open");
        });
    });
}
