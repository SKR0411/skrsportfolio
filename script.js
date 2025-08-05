    const textToType = "Hi, I'm Sujan Roy";
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function type() {
      if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      }
    }

    window.addEventListener("load", type);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
