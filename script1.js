// Scroll shirts left or right
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const rightBtn = document.querySelector(".scroll-btn.right");

  const scrollAmount = 300; // Adjust scroll distance here

  leftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

//search function by name of T-shirt
function searchShirts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".shirt-card");
  const noResults = document.getElementById("noResults");

  let matches = 0;

  cards.forEach(card => {
    const nameElement = card.querySelector("p");
    if (!nameElement) return;

    const shirtName = nameElement.textContent.toLowerCase();

    if (shirtName.includes(input)) {
      card.style.display = "block";
      matches++;
    } else {
      card.style.display = "none";
    }
  });

  // Show or hide "No results found"
  noResults.style.display = matches === 0 ? "block" : "none";
}

// Run search on every keystroke
document.getElementById("searchInput").addEventListener("input", searchShirts);


// Scroll to section function (used for navigation buttons like "Shop Now")
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
//contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
}