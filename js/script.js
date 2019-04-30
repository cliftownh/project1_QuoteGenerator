/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Array of quote objects

const quotes = [
  {
    quote: "The true sign of intelligence is not knowledge but imagination.",
    source: "Albert Einstein"
  },
  {
    quote: "Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.",
    source: "Winston Chruchill"
  },
  {
    quote: "Not everything that is faced can be changed. But nothing can be changed until it is faced.",
    source: "James Baldwin"
  },
  {
    quote: "It is better to fail in originality than to succeed in imitation.",
    source: "Herman Melville"
  },
  {
    quote: "Others have seen what is and asked why. I have seen what could be and asked why not.",
    source: "Pablo Picasso",
    citation: "Metamorphoses of the Human Form"
  },
  {
    quote: "The idea becomes a machine that makes the art.",
    source: "Sol Lewitt",
    citation: "Art after Philosophy",
    year: 1969
  }
];

// Random quote function

const getRandomQuote = (array) => {
  let rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

const getRandomColor = () => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);

  document.body.style.backgroundColor = randomColor;
}

// Function to print quote

const printQuote = () => {
  let html = ``;
  let randQuote = getRandomQuote(quotes);
  let quoteBox = document.getElementById('quote-box');

  html += `
    <p class="quote">
      ${randQuote['quote']}
    </p>
    <p class="source">
      ${randQuote['source']}`;

  if (randQuote.citation) {
    html += `<span class="citation">
              ${randQuote['citation']}
            </span>`;
  }
  if (randQuote.year) {
    html += `<span class="year">
              ${randQuote['year']}
            </span>`;
  }
  html += `</p>`

  quoteBox.innerHTML = html;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
