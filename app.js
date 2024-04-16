const quotes = [
  "It is not a sin to fight for the right cause.",
  "One can succumb to evil, but reject that darkness and rediscover the light with new understanding.",
  "You’ll laugh at your fears when you find out who you are.",
  "There's no room in the ring for overbearing pride!",
  "If everybody's against me, that makes it more of a challenge, and that'll just force me to try even harder to win.",
  "You may have invaded my mind and my body, but there is one thing a Human always keeps: his pride!",
  "And this is to go even further beyond!",
  "'Meaningless,' huh? What do you know of meaningless?! Spend most of your life ruled by another... watch YOUR race dwindle to a handful... and then, tell me what has more meaning than your own strength!",
  "Power comes in response to a need, not desire. You have to create that need.",
  "I can win! I feel great! I can do this!",
];
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
btnEl.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteEl.textContent = quotes[randomIndex];
}
