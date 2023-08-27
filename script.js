


// ...CONVERT Function...



function convert() 
{
    const weightInput = document.getElementById("weight");
    const weight = parseFloat(weightInput.value);
    const conversionType = document.getElementById("conversionType").value;
  
    let result;
    
    if (conversionType === "kgToLb") 
    {
      result = weight * 2.20462;
      result = result.toFixed(2) + " lbs";
    } 
    else if (conversionType === "lbToKg") 
    {
      result = weight * 0.4536;
      result = result.toFixed(2) + " kg";
    } else 
    {
    result = "Invalid conversion type";
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent ="Result = " + result;
}




// ...NUMBER STATISTICS



function calculateStats() {
    const numbersInput = document.getElementById("numbers");
    const numbersString = numbersInput.value;

    const numbersArray = numbersString.split(",").map(Number);

    const max = Math.max(...numbersArray);

    const min = Math.min(...numbersArray);


    const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);


    const average = sum / numbersArray.length;


    const reversedNumbers = numbersArray.slice().reverse();


    document.getElementById("max").textContent = "Max: " + max;
    document.getElementById("min").textContent = "Min: " + min;
    document.getElementById("sum").textContent = "Sum: " + sum;
    document.getElementById("average").textContent = "Average: " + average;
    document.getElementById("reversed").textContent = "Reversed: " + reversedNumbers.join(", ");
  }






// ...............WISOM QUOTE.........





const quotes = 
[
{text: "The only way to do great work is to love what you do."},
{text: "In the middle of difficulty lies opportunity."},
{text: "Believe you can and you're halfway there."},
{text: "The future belongs to those who believe in the beauty of their dreams."},
{text: "Success is not the key to happiness. Happiness is the key to success."},
{text: "Stay hungry, stay foolish.",}
];

const quoteElement = document.getElementById("quote");

function generateRandomQuote() 
{
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.text;
}

generateRandomQuote();

const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const text = document.getElementById("quote");

redButton.addEventListener("click", function() 
{
    text.style.color = "red";
    text.style.backgroundColor = "rgb(201, 201, 201)";
    text.style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
});

greenButton.addEventListener("click", function() 
{
    text.style.color = "green";
    text.style.backgroundColor = "#95fcc8";
    text.style.fontFamily = "Arial, Helvetica, sans-serif";
    text.style.fontStyle = "italic" ;
});

blueButton.addEventListener("click", function() 
{
    text.style.color = "blue";
    text.style.backgroundColor = "#94c1db";
    text.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    text.style.fontStyle = "normal" ;
});

yellowButton.addEventListener("click", function() 
{
    text.style.color = "yellow";
    text.style.backgroundColor = "#f8a46b";
    text.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
});





function clearAll() {
    document.getElementById('output').value = '';
  }

  function capitalizeText() {
    const inputText = document.getElementById('output').value;
    const capitalizedText = inputText.toUpperCase();
    document.getElementById('output').value = capitalizedText;
  }

  function sortText() {
    const inputText = document.getElementById('output').value;
    const sortedText = inputText.split('').sort().join('');
    document.getElementById('output').value = sortedText;
  }

  function reverseText() {
    const inputText = document.getElementById('output').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('output').value = reversedText;
  }

  function stripBlanks() {
    const inputText = document.getElementById('output').value;
    const strippedText = inputText.replace(/\s+/g, '');
    document.getElementById('output').value = strippedText;
  }

  function shuffleText() {
    const inputText = document.getElementById('output').value;
    const shuffledText = inputText.split('').sort(() => Math.random() - 0.5).join('');
    document.getElementById('output').value = shuffledText;
  }

  function addNumbers() {
    const inputText = document.getElementById('output').value;
    let newText = '';
    for (let i = 0; i < inputText.length; i++) {
      newText += inputText[i] + (i + 1);
    }
    document.getElementById('output').value = newText;
  }