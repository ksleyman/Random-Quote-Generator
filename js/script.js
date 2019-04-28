/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//create an array of objects to hold the quotes 
var quotes = [
  {
    quote: "Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.",
    source: "Oprah Winfrey"
  },
  {
    quote: "Be kind whenever possible. It is always possible.",
    source: "Dalai Lama"
  },
  {
    quote: "The more things you do, the more you can do.",
    source: "Lucille Ball"
  },
  {
    quote: "Change your life today. Don't gamble on the future, act now, without delay.",
    source: "Simone de Beauvoir"
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    source: "Eleanor Roosevelt",
    quoteType: "motivational"
  },
  {
    quote: "Do or do not. There is no try.",
    source: "Yoda",
    citation: "The Empire Strikes Back",
    year: 1980,
    quoteType: "movie"
  }
]

//get a random quote object from the quotes array
function getRandomQuote (){
    var randomNumber;
    randomNumber = Math.random();
    randomNumber = Math.floor((randomNumber*quotes.length)+1);
    return quotes[randomNumber-1];
}

function getRandomColor(){
  //put 6 random hex digits together
  var i = 0;
  var randomColor = "";
  while (i<6){
    randomColor += getRandomHexDigit();
    i++;
  }
  randomColor = "#"+randomColor;
  return randomColor;
}

function getRandomHexDigit(){
  //a hex color is six digits, each digit can be 0123456789abcdef. 
  //add each of these values to an array
  var hexDigit = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  //get a random hex digit
  var randomHexDigit = Math.floor((Math.random()*hexDigit.length)+1);
  return hexDigit[randomHexDigit-1];
}


//construct the HTML that displays the quote and accompanying information
//use as the HTML in the 'quote-box' div
//use the CSS of the random background color
function printQuote(){
  var randomQuote = getRandomQuote();
  var randomBackgroundColor = getRandomColor();
  var print = "";
  print += '<p class="quote">' + randomQuote.quote + '</p>';
  print += '<p class="source">'+randomQuote.source;
  if (randomQuote.citation) {
    print += '<span class="citation">' + randomQuote.citation + '</span>';
  } 
  if (randomQuote.year) {
    print += '<span class="year">' + randomQuote.year + '</span>';
  } 
  if (randomQuote.quoteType) {
    print += '<span class="quoteType">' + randomQuote.quoteType + '</span>';
  } 
  print += '</p>';
  document.getElementById('quote-box').innerHTML = print;
  document.body.style.backgroundColor = randomBackgroundColor;
}

//execute 
setInterval(printQuote, 20000);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


