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
plusSign.style.cssText = "background-color:aqua-marine;"
minusSign.style.cssText = "background-color:aqua-marine;" ///resets the colors of the buttons of cleardisplay utton is pushed
divideSign.style.cssText = "background-color:aqua-marine;"
multiplySign.style.cssText = "background-color:aqua-marine;"
})





let operatorBeingUsed = ''

let var1 = 0;

let var2 = 0;

let totalValue = 0;



let plusSign = document.querySelector('.plusSign')
plusSign.addEventListener('click', function(){  //Eventlister which updates var1 value and remove display.value
                                                //creates string flag and makes the operator button red to signal usage
var1 = display.value
display.value = ''
operatorBeingUsed = plusSign.textContent
plusSign.style.cssText = "background-color:red;"


})

let minusSign = document.querySelector('.minusSign')
minusSign.addEventListener('click', function(){  //Eventlister which updates var1 value and remove display.value
    //creates string flag and makes the operator button red to signal usage
var1 = display.value
display.value = ''
operatorBeingUsed = minusSign.textContent
minusSign.style.cssText = "background-color:red;"


})

let divideSign = document.querySelector('.divideSign')
divideSign.addEventListener('click', function(){  //Eventlister which updates var1 value and remove display.value
    //creates string flag and makes the operator button red to signal usage
var1 = display.value
display.value = ''
operatorBeingUsed = divideSign.textContent
divideSign.style.cssText = "background-color:red;"


})

let multiplySign = document.querySelector('.multiplySign')
multiplySign.addEventListener('click', function(){  //Eventlister which updates var1 value and remove display.value
    //creates string flag and makes the operator button red to signal usage
var1 = display.value
display.value = ''
operatorBeingUsed = multiplySign.textContent
multiplySign.style.cssText = "background-color:red;"


})



equalSign = document.querySelector('.equalSign')

equalSign.addEventListener('click', function(item) {
     
    
    var2 = display.value

    if(operatorBeingUsed == '+') 
    
    {totalValue = Number(var1) + Number(var2)}

    if(operatorBeingUsed == '-')

    {totalValue = Number(var1) - Number(var2)}

    if(operatorBeingUsed == '/')

    {totalValue = Number(var1) / Number(var2)}

    if(operatorBeingUsed == 'x')

    {totalValue = Number(var1) * Number(var2)}

    if(operatorBeingUsed == '')
    {display.value = ''}

     
     display.value = totalValue


     var1 = ''
     var2 = ''
    
     plusSign.style.cssText = "background-color:aqua-marine;"
     minusSign.style.cssText = "background-color:aqua-marine;"
     divideSign.style.cssText = "background-color:aqua-marine;"
     multiplySign.style.cssText = "background-color:aqua-marine;"

     

})
