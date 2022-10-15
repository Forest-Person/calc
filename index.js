let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let symbolButton = document.querySelectorAll('.symbols')

symbolButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add numbers to numbers display


 display.value += e.target.textContent


}))



clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''

})



let plusSign = document.querySelector('.plusSign')

let var1 = 0;

let var2 = 0;

plusSign.addEventListener('click', function(){
let displayVariable = display.value

displayVariable + display.value

display.value = displayVariable + display.value

///trying to create a funciton with the plus sign to add two numbers together
})


