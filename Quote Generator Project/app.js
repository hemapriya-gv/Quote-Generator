var quotes = [
    "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.",
    "You always pass failure on the way to success.",
    "Life is what happens when you’re busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "Never let the fear of striking out keep you from playing the game."
]

function getQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('newQuoteSection').innerHTML = quotes[randomNumber];
}