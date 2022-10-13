let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let withoutCommas;

let displayVar = []

let num0 = document.querySelector('.num0')

num0.addEventListener('click', function(item) {

displayVar.push(0)
displayVar.join('')
newValue = displayVar.toString()
withoutCommas = newValue.replace(/,/g, '');

if (withoutCommas.length >= 15) {return}
display.textContent = withoutCommas
})

clearDisplay.addEventListener('click', function(e)
{
withoutCommas = ''
display.textContent = ''
displayVar = []
})