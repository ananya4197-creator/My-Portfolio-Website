// Loader

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1000);
});


// Typing Animation

var typed = new Typed(".typing", {
    strings: [
        "Frontend Developer",
        "Aspiring UI/UX Designer",
        "B.Tech CSE Student",
        "Navodayan",
        "Problem Solver",
        "CodeAlpha Intern"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true
});


// Dark / Light Mode Toggle

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon = toggleBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});


// Scroll Reveal Animation

const reveals = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .achievement-card, .contact-form"
);

function revealElements() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
            element.classList.add("reveal");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();


// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// Contact Form Demo

const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    form.reset();
});


// Smooth Hover Effect

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.transform =
            `perspective(1000px)
             rotateX(${(y - rect.height / 2) / 25}deg)
             rotateY(${-(x - rect.width / 2) / 25}deg)
             translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});


// Greeting Based On Time

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {
    greeting = "Good Morning ☀️";
}
else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
}
else {
    greeting = "Good Evening 🌙";
}

console.log(greeting);