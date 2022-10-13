let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let withoutCommas;

let displayVar = []

let num0 = document.querySelector('.num0')

num0.addEventListener('click', function(item) { //event listener to add zeros to numbers display

displayVar.push(0)
displayVar.join('')
newValue = displayVar.toString()
withoutCommas = newValue.replace(/,/g, '');

if (withoutCommas.length >= 9) {return}
display.textContent = withoutCommas
})

clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{
withoutCommas = ''
display.textContent = ''
displayVar = []
})