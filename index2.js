let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let numberButton = document.querySelectorAll('.numberSymbols')



let equalSign = document.querySelector('.equalSign')

let numbersArray = [] //this will hold a record of past numbers put into display

let operatorArray = [] //this holds record of last operators used




const operatorButton = document.querySelectorAll('.operands')

operatorButton.forEach( (item)=>
item.addEventListener('click',function(e) {
    if(e.target.classList.contains('equalSign')){return} //dont add equal sign to array

    operatorArray.push(e.target.textContent)

    numbersArray.push(display.value)  //when an operator is clicked the value on the display is stored into this array
    console.log(numbersArray,operatorArray)
     
    display.value = ''  //remove value from the display to make room for the next
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

equalSign.addEventListener('click', function(e){
    numbersArray.push(display.value)
    operate()
    console.log(numbersArray,operatorArray)
})

function operate() {
for (let i = 0; i = operatorArray.length; i ++)
    if(operatorArray[0] == '+'){return display.value = Addition()}
    else if(operatorArray[0] == '-'){return display.value = Subtraction()}
    }
    numbersArray.splice(0,2)
    
    operatorArray.shift()

function Addition() {

    let total = Number(numbersArray[0]) + Number(numbersArray[1])
    
    return display.value = total
   }

   function Subtraction() {

    let total = Number(numbersArray[0]) - Number(numbersArray[1])
    
    return display.value = total

   }