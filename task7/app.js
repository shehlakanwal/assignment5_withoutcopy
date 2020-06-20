// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var input=prompt("enter any number or letter")
 var ascii=input.charCodeAt()
if(ascii>=65 && ascii<=90){
    alert("capital letter")
}



if(ascii>=97 && ascii<=122){
    alert("lower case letter")
}


if(ascii>=48 && ascii<=57){
    alert(" you enter number")
}

// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var input1=+prompt("enter number")
var input2=+prompt("enter number")

if (input1>input2){
    alert("input1 is greater")
}

 if (input2>input1){
    alert("input2 is greater")
}

if (input1==input2){
    alert("both are equal")
}


// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var input1=+prompt("enter number")
if (input1>0){
    alert("number is positive")
}

 if (input1<0){
    alert("number is negative")
}

if (input1==0){
    alert("num is zero")
}

// Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var input=prompt("enter letters")
if( input=='a' || input=='e'|| input=='i'|| input=='o'||input=='u'){


    alert(true)
}
else{
    alert(false)
}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise


var password=1234;
var user_password=prompt("enter your password")
if (user_password==="" || user_password==null){

    document.write("please enter your password" +"<br>")
}

 else if(user_password==password)
{
document.write("Correct! The password you entered matches the original password" +"<br>")

}
 else if (user_password!=password)
{
    document.write("Incorrect password" +"<br>")
}


// This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";

document.write(greeting)

}
else{
greeting = "Good evening";

document.write(greeting)
}


// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time=prompt("Enter time")

if(time>=0000 && time<1200){
    document.write("good morning")
}

else if(time>=1200 && time<1700){
    document.write("good afternoon")
}

else if(time>=1700 && time<2100){
    document.write("good evening")
}

else if(time>=2100 && time<2359){
    document.write("good night")
}

else{

    document.write("enter correct time")
}