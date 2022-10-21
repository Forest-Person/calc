let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let numberButton = document.querySelectorAll('.numberSymbols')

let operatorButton = document.querySelectorAll('.operands')

let equalSign = document.querySelector('.equalSign')

let numbersArray = [] //this will hold a record of past numbers put into display

let operatorArray = [] //this holds record of last operators used



operatorButton.forEach( (item)=>
item.addEventListener('click',function(e) {

    operatorArray.push(e.target.textContent)  //store operator used in array
    
    numbersArray.push(display.value)  //when an operator is clicked the value on the display is stored into this array
    console.log(numbersArray,operatorArray)
    if(operatorArray[1] == '='){operatorArray.splice(1,1)} //if = sign splice out of the array
    else {display.value = ''}  //remove value from the display to make room for the next
} ))





numberButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add numbers to numbers display based on form input and textcontent added with event lsitener below


 display.value += e.target.textContent //put the text content of the number symbo onto the display
display.value = Number(display.value) //change display text to number type


}))



clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''     //event listener to clear the display value and the numbers display that also deletes arrays for number symbols and operator symbols
numbersArray.length = 0
operatorArray.length = 0  ///put the values of both arrays back to 0 when the clear button is pressed

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

   