const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author");
const quoteBtn = document.querySelector(".quote-btn");

async function getQuote() {
  quoteText.textContent = "Loading...";
  authorText.textContent = "";
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    quoteText.textContent = `"${data.quote}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Failed to load quote.";
    authorText.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

// Initial quote on page load
getQuote();

// New quote on button click
quoteBtn.addEventListener("click", getQuote);
