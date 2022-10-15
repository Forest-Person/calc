let display = document.querySelector('.numbersDisplay')

let clearDisplay = document.querySelector(".clearDisplay")

let symbolButton = document.querySelectorAll('.symbols')

symbolButton.forEach((item)=>
item.addEventListener('click', function(e) { //event listener to add numbers to numbers display based on form input and textcontent added with event lsitener below


 display.value += e.target.textContent 
display.value = Number(display.value)

}))



clearDisplay.addEventListener('click', function(e)  //event listener to clear the numbers display
{

display.value = ''     //event listener to clear the display value and the numbers display

})



let plusSign = document.querySelector('.plusSign')

let operatorBeingUsed = ''

let var1 = 0;

let var2 = 0;

let totalValue = 0;


plusSign.addEventListener('click', function(){

var1 = display.value
display.value = ''
operatorBeingUsed = plusSign.textContent
plusSign.style.cssText = "background-color:red;"

///trying to create a funciton with the plus sign to add two numbers together
})



equalSign = document.querySelector('.equalSign')

equalSign.addEventListener('click', function(item) {
     console.log(operatorBeingUsed)
    
    var2 = display.value

    if(operatorBeingUsed == '+') 
    
    {totalValue = Number(var1) + Number(var2)}

     
     display.value = totalValue


     var1 = ''
     var2 = ''
    
     plusSign.style.cssText = "background-color:aqua-marine;"

})
