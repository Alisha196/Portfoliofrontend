// Removed Speech Recognition feature

// Quote Typing and Deleting Animation
const quotes = [
  "Innovation is the ability to see change as an opportunity, not a threat.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Turning challenges into opportunities, one line of code at a time.",
  "The future belongs to those who code, create, and innovate.",
  "Technology is best when it brings people together."
];

let currentQuoteIndex = 0;
let currentText = '';
let typingSpeed = 100; // Speed at which text is typed
let deletingSpeed = 50; // Speed at which text is deleted
let pauseTime = 1500; // Pause time before deleting quote
let quoteTextElement = document.getElementById('quote-text');

function typeQuote() {
  let currentQuote = quotes[currentQuoteIndex];
  let index = currentText.length;
  
  if (index < currentQuote.length) {
    currentText += currentQuote.charAt(index);
    quoteTextElement.textContent = currentText;
    setTimeout(typeQuote, typingSpeed);
  } else {
    setTimeout(deleteQuote, pauseTime);
  }
}

function deleteQuote() {
  let index = currentText.length;
  
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
