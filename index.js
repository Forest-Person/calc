let display = document.querySelector('.numbersDisplay')



let clearDisplay = document.querySelector(".clearDisplay")

let withoutCommas = '';

let displayVar = []

let num0 = document.querySelector('.num0')

num0.addEventListener('click', function(item) { //event listener to add zeros to numbers display


display.value += 0






})

clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{
withoutCommas = ''
display.value = ''
displayVar = []
})