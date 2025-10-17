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

function openPage(url) {
   window.open(url, "_blank");
}
								
// Get the popup element
var popup = document.getElementById("profilePopup");
								
// Function to open the popup
function viewPp() {
  popup.style.display = "flex";
}
								
// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}
								
// Close the popup if the user clicks anywhere outside of the content
window.onclick = function(event) {
  if (event.target == popup) {
    closePopup();
  }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop normal form submission

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent("Message from your portfolio sent by " + name);
    const body = encodeURIComponent(
        "Name: " + name + "\n\n" +
        "Message:\n\n" + message
    );

    // Opens the default email client
    window.location.href = `mailto:sujanroy63836@gmail.com?subject=${subject}&body=${body}`;
});