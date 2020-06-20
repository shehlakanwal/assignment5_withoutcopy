// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city=prompt("enter city name")
// if(city==="karachi"){
//     document.write("Welcome to city of lights")
// }


// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender =prompt("enter gender")
// if(gender=="male"){
//     document.write("Good Morning Sir")
// }
// if(gender=="female"){
//     document.write("Good Morning maam")
// }

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color=prompt("enter color of road traffic signal")

// if(color=="Red" || color=="red") {
//     document.write("must stop")
// }

//  else if(color=="Yellow" || color=="yellow"){
//     document.write("ready to move")
// }

//  else if(color=="Green"|| color== "green" ){
// document.write("move now")
// }
// else{

//     document.write("nothing")
// }

// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”


// var fuel=+prompt("enter remaining fuel in car")
// if(fuel<0.25){
//     alert("Please refill the fuel in your car")
// }

// // Run this script, & check whether alert message would be
// // displayed or not. Record the outputs.
// // a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // b

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// // d

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // e

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
//     // f

//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         }



        // Write a program to take input the marks obtained in three
        // subjects & total marks. Compute & show the resulting
        // percentage on your page. Take percentage & compute
        // grade as per following table:

    // var sub1=+prompt("enter obtain marks of sub1")
    // var  sub2=+prompt("enter obtain marks of sub2")
    // var sub3=+prompt("enter obtain marks of sub3")

    // var total1=+prompt("enter total marks of sub1" )
    // var total2=+prompt("enter total marks of sub2")
    // var total3=+prompt("enter total marks of sub3")


    // var  sum1=sub1+sub2+sub3

    // var sum2=total1+total2+total3

    // var per=sum1/sum2*100

    // document.write( "<h1> Marksheet   <br></h1>"+"<b> total</b>:"+ " "+ sum2 +"<br>")
    
    // document.write( "<b> Obtain Marks</b>:"+ " "+ sum1 +"<br>")

    // document.write( "<b> per</b>:"+ " "+ per+ "%"+"<br>")

    // if(per>=70 && per<=80)
    // {
    //     document.write( "<b> Grade</b>:" +" "+"grade A" +"<br>")
    //     document.write( "<b> Remarks</b>:"+ " "+"good")
    // }


    // if(per>=60 && per<=70)
    // {
    //     document.write( "<b> Grade</b>:" +" "+"grade B" +"<br>")
    //     document.write( "<b> Remarks</b>:"+ " "+"you need to improve")
    // }


    // if(per>=80 && per<=90)
    // {
    //     document.write( "<b> Grade</b>:" +" "+"grade A+" +"<br>")
    //     document.write( "<b> Remarks</b>:"+ " "+"Excellent")
    // }


//     Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var secret_no=8
// var guess_no=+prompt("Guess Number")
// if(guess_no===secret_no){
//     document.write("bingo! Correct  answer")
// }

// if(guess_no==secret_no+1){
//     document.write("Close enough to the correct answer")
// }


// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var num=3;
// if(num%3==0){
//     document.write("no is divisible by 3")
// }

// Write a program that checks whether the given input is an
// even number or an odd number.

// var num=+prompt("enter number");
// if(num%2==0){
//     document.write("num is even")
// }

// if(num%2!=0){
//     alert("num is odd")
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// var temp=+prompt("enter temperature")
// if(temp>40 && temp<=50){
//     alert("It is too hot outside.")
// }
// if(temp>30 && temp<=40){
//     alert("The Weather today is Normal.")
// }

// if (temp>20 && temp<=30){
//     alert('Today’s Weather is cool.')
// }
// if(temp>10 && temp<=20){
//     alert("OMG! Today’s weather is so Cool.")
// }

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var input1=+prompt("enter first operand")
var input2=+prompt("enter second operand")
var operation=prompt("enter sign")

if(operation=="+"){
    document.write( input1+operation+ input2 + "=")  
    document.write(input1+input2 ) 
}

if(operation=== "-"){
    document.write( input1+operation+ input2 + "=")  
    document.write(input1-input2 )

    // alert(input1-input2)
  }

  if(operation=="*"){
    document.write( input1+operation+ input2 + "=")  
    document.write(input1*input2 )  
  }

  if(operation=="/"){
    document.write( input1+operation+ input2 + "=")  
    document.write(input1/input2 )  
  }

  if(operation=="%"){
    document.write( input1+operation+ input2 + "=")  
    document.write(input1%input2 ) 
  }