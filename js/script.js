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
   DYNAMIC ACTIVE NAV LINK ON SCROLL
===================== */
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if the scroll position is within this section
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
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

        const subject = encodeURIComponent("Portfolio Message from " + name);
        const body = encodeURIComponent(message);

        window.location.href = `mailto:sujanroy63836@gmail.com?subject=${subject}&body=${body}`;
    });
}
