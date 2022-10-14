let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let symbolButton = document.querySelectorAll('.symbols')

symbolButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add zeros to numbers display


return display.value += e.target.textContent


}))

clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''

})


