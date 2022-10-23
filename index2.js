let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let delKey = document.querySelector('.backspace')

let numberButton = document.querySelectorAll('.numberSymbols')

let equalSign = document.querySelector('.equalSign')

let numbersArray = [] //this will hold a record of past numbers put into display

let operatorArray = [] //this holds record of last operators used




const operatorButton = document.querySelectorAll('.operands')

operatorButton.forEach( (item)=>
item.addEventListener('click',function(e) {
    
    
    if(e.target.classList.contains('equalSign')){return} //dont add equal sign to array

    operatorArray.push(e.target.textContent) //push most recent pushed operator to operator array

    numbersArray.push(Number(display.value))  //when an operator is clicked the value on the display is stored into this array
   
  
    display.value = ''
    console.log(numbersArray,operatorArray)
     
    //display.value = ''  //remove value from the display to make room for the next
} ))

let runningTotal = ''
let previousTotal = ''

function operate() {
    for (let i = 0; i = operatorArray.length; i ++){
        if(operatorArray[0] == '+'){ display.value = Addition()}
        else if(operatorArray[0] == '-'){ display.value = Subtraction()}
        else if(operatorArray[0] == 'x'){display.value = Multiplication()}
        else if(operatorArray[0] == '/'){display.value = Division()}
    previousTotal = runningTotal
        numbersArray.splice(0,2)//on each loop remove first two numbers in numbers array after operation
        
        operatorArray.shift()//remove first operator in operatorarray in each loop
    
        numbersArray.unshift(runningTotal)
        
        }
    }


numberButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add numbers to numbers display based on form input and textcontent added with event lsitener below
    //if (display.value.length >= 12){
      //display.style.cssText = "font-size:1rem;"}
     // else{display.style.cssText = "font-size:3rem;"}

 display.value += e.target.textContent //put the text content of the number symbo onto the display
display.value = Number(display.value) //change display text to number type


}))



clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''     //event listener to clear the display value and the numbers display that also deletes arrays for number symbols and operator symbols
numbersArray.length = 0
operatorArray.length = 0  ///put the values of both arrays back to 0 when the clear button is pressed

})

delKey.addEventListener('click', function() {

let removeOne = display.value


removeOne = removeOne.slice(0,-1)

display.value = removeOne



})


equalSign.addEventListener('click', function(e){
    numbersArray.push(Number(display.value))
  
    operate()
    numbersArray.shift()
    console.log(numbersArray,operatorArray)
})


function Addition() {

    
    let total = Number(numbersArray[0]) + Number(numbersArray[1])
    runningTotal = total
    
    return display.value = total
   }

   function Subtraction() {

    let total = Number(numbersArray[0]) - Number(numbersArray[1])
    runningTotal = total
    return display.value = total

   }

function Multiplication() {
    let total = Number(numbersArray[0]) * Number(numbersArray[1])
    runningTotal = total
    return display.value = total

}

function Division() {
    let total = Number(numbersArray[0]) / Number(numbersArray[1])
    
    runningTotal = total
    return display.value = total

}