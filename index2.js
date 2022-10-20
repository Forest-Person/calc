let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let numberButton = document.querySelectorAll('.numberSymbols')

let operatorButton = document.querySelectorAll('.operands')

let equalSign = document.querySelector('.equalSign')

let numbersArray = []

let operatorArray = []q



operatorButton.forEach( (item)=>
item.addEventListener('click',function(e) {

    operatorArray.push(e.target.textContent)
    if(operatorArray[1] == '='){operatorArray.splice(1,1)}
    numbersArray.push(display.value)
    console.log(numbersArray,operatorArray)
    display.value = ''
} ))





numberButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add numbers to numbers display based on form input and textcontent added with event lsitener below


 display.value += e.target.textContent 
display.value = Number(display.value)


}))



clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''     //event listener to clear the display value and the numbers display that also deletes arrays for number symbols and operator symbols
numbersArray.length = 0
operatorArray.length = 0

})


function operate() {

    if(operatorArray[0] == '+'){return display.value = Addition()}

    }


function Addition() {

    total = numbersArray[0] + numbersArray[1]
    numbersArray.pop(0)
    numbersArray.pop(1)
    return  total
   }