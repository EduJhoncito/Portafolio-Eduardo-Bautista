document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("show");
});

ScrollReveal().reveal('.languages', { delay: 500 });
ScrollReveal().reveal('.frontend', { delay: 500 });
ScrollReveal().reveal('.backend', { delay: 500 });
ScrollReveal().reveal('.Others', { delay: 500 });
ScrollReveal().reveal('.nav-projects', { delay: 500 });
ScrollReveal().reveal('.nav-contacts', { delay: 500 });