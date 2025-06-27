// ====================
// Quote Typing and Deleting Animation
// ====================

const quotes = [
  "Innovation is the ability to see change as an opportunity, not a threat.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Turning challenges into opportunities, one line of code at a time.",
  "The future belongs to those who code, create, and innovate.",
  "Technology is best when it brings people together."
];

let currentQuoteIndex = 0;
let currentText = '';
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 1500;
let quoteTextElement = document.getElementById('quote-text');

function typeQuote() {
  const currentQuote = quotes[currentQuoteIndex];
  const index = currentText.length;

  if (index < currentQuote.length) {
    currentText += currentQuote.charAt(index);
    quoteTextElement.textContent = currentText;
    setTimeout(typeQuote, typingSpeed);
  } else {
    setTimeout(deleteQuote, pauseTime);
  }
}

function deleteQuote() {
  const index = currentText.length;

  if (index > 0) {
    currentText = currentText.slice(0, index - 1);
    quoteTextElement.textContent = currentText;
    setTimeout(deleteQuote, deletingSpeed);
  } else {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    setTimeout(typeQuote, typingSpeed);
  }
}

// Start the typing animation
typeQuote();

// ====================
// Contact Form Submission Logic
// ====================

document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("https://portfoliobackend2-beryl.vercel.app//api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Failed to send message: " + result.error || "Server Error");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Something went wrong. Please try again later.");
  }
});
