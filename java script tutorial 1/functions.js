const number1= 20
const number2= 100
const number3= 200

//create a function to add three numbers
function add(a,b,c) {
    return a+b+c
}
const sum =add(number1,number2,number3)
console.log ('The sum of the three numbers passed is '+sum)


//create a function to multiply three numbers using template literals
function multiplication(a,b,c) {
    return number1* number2* number3 
}
//call the function and store the result in a variable
const multiply =multiplication (number1,number2,number3)

//log the result to the console
console.log (`The multiplication of the three passed numbers is ${multiply}`)


//create a function to subtract three numbers using template literals
function subtract(a,b,c) {
   return a-b-c;
}
//call the function and store the result in a variable
const subtractresult =subtract (number1,number2,number3);

//log the result to the console
console.log (`The subtraction between the three numbers passed is ${subtractresult}`)

//create a function to divide three numbers using template literals
function divide (a,b,c) {
    return a/b/c;
}
//call the function and store the result in a variable
const divideresult =divide (number1,number2,number3);

//log the result to the console
console.log ( `The division between the three numbers passed is ${divideresult}`)
