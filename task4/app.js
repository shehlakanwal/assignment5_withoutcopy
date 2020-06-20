// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var a=+prompt("enter a number1 for add")
// var b=+prompt("enter a number2 for add")
// document.write(a+b + "<br>")

// // Repeat task1 for subtraction, multiplication, division &
// // modulus.

// var a=+prompt("enter a number1 for subtraction ")
// var b=+prompt("enter a number2 for subtraction")
// document.write(a-b + "<br>")

// var a=+prompt("enter a number1 for division")
// var b=+prompt("enter a number2 for division")
// document.write(a/b + "<br>")

// var a=+prompt("enter a number1 for multiplication")
// var b=+prompt("enter a number2 for multiplication")
// document.write(a*b + "<br>")


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var a
// document.write(a + "<br>")
// var b=5
// document.write(b + "<br>")
// ++b
// document.write(b + "<br>")
// var c=b+7
// document.write(c + "<br>")
// --c
// document.write(c + "<br>")
// document.write(b%3 + "<br>")

// Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// var ticket = 600
// var buy=ticket*5
// document.write(buy + "PKR") 

// for(i=1;i<=10;i++)
// {

//     document.write("4" + "*" + i + "=" + 4*i +"<br>")
// }

// // The Temperature Converter: It’s hot out! Let’s make a
// // converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NN o F is NN o C”.


// var celcius_temp=25
// var fahrenhite_temp=70

// var  celcius=(fahrenhite_temp-32)*5/9
// var fahrenhite=(celcius_temp*9/5)+32

// document.write(celcius + "*C" +"<br>")
// document.write(fahrenhite+ "*F" +"<br>")

// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price_of_item_1=650
var price_of_item_2=100
var  Ordered_quantity_of_item_1=3
var   Ordered_Quantity_of_item_2=7
var Shipping_charges=100
var total_cost=price_of_item_1*Ordered_quantity_of_item_1+price_of_item_2*Ordered_Quantity_of_item_2 +Shipping_charges
document.write(total_cost +"<br>")

// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total_marks= 980
var obtain_marks=804
document.write(obtain_marks/total_marks*100 + "%"+"<br>")

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var total=10*104.80+28*25

document.write("total currency in PKR is  " + total +"<br>")


// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var a=5 
document.write(a+5 +"<br>"+ a*10 + "<br>"+(a*10)/2  + "<br>")


// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var current_year=2020
var birth_year=1992
var age=current_year-birth_year
document.write("<h1>Age calculator</h1> "+"<br> current year:" + current_year+ "<br> birth year:" +birth_year+ "<br> current age:"+age)

// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

var radius=20 ,π = 3.142
var Circumference=2 *π* radius
var Area_of_a_circle = π *radius *radius

document.write("<h1>The Geometrizer</h1> "+"<br> radius:" + radius+ "<br> Circumference:" +Circumference+ "<br> Area_of_a_circle:"+Area_of_a_circle)

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
var snack="catty chin"
var current_age=15;
var max_age=65;
var per_day=3
var eat_total_for_the_rest_of_your_life= ( max_age-current_age)*per_day
document.write("<h1> The Lifetime Supply Calculator</h1>" + "<br> current age:"+current_age+"<br> max age:" + max_age+"<br> per_day:"+ per_day+"<br> eat_total_for_the_rest_of_your_life:"  +eat_total_for_the_rest_of_your_life)