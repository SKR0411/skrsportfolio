/* =====================
   TYPING EFFECT (HOME)
===================== */

const typingElement = document.getElementById("typing-text");
const textToType = "Sujan Kumar Roy";

if (typingElement) {
    let index = 0;

    function type() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 120);
        }
    }

    window.addEventListener("load", type);
}

/* =====================
   FADE-IN ON SCROLL
===================== */

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

/* =====================
   ACTIVE NAV LINK
===================== */

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a").forEach(link => {
    const linkPage = link.getAttribute("href").replace("/", "");
    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

/* =====================
   CONTACT FORM (MAILTO)
===================== */

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !message) return;

        const subject = encodeURIComponent(
            "Portfolio Message from " + name
        );
        const body = encodeURIComponent(message);

        window.location.href =
            `mailto:sujanroy63836@gmail.com?subject=${subject}&body=${body}`;
    });
}