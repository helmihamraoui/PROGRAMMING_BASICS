//this function will be return a msg
function myBirthYearFunc(){
    console.log("I was born in" + 1980);//this console.log will be excuted "T was born in 1980"
}
myBirthYearFunc();//this invoke the function

//this function will be return a msg
function myBirthYearFunc(birthYearInput){
    console.log("I was born in" + birthYearInput);//this console.log will be excuted "T was born in "+ the parameter
}
myBirthYearFunc(1980);//this invoke the function with the parameter "1980"


//this function will be return a sum of tow numbers
function add(num1, num2){
    console.log("Summing Numbers!");//this console.log will be excuted "Summing Numbers!"
    console.log("num1 is: " + num1);//this console.log will be excuted "num1 is: " + num1
    console.log("num2 is: " + num2);//this console.log will be excuted "num2 is: " + num2
    var sum = num1 + num2;
    console.log(sum);
}
add(10, 20);//this invoke the function with the parameter num1=10 ,num2=20

