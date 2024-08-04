const quoteContainer = document.getElementById("quote-generator");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const tweetQuote = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.textContent = quote.author ? quote.author : "Unknown";
  quoteText.textContent = quote.text;
}

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    console.error("Failed to fetch quotes", error);
  }
}

getQuotes();

newQuoteButton.addEventListener("click", newQuote);

tweetQuote.addEventListener("click", () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
});
