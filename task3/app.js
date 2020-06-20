// Declare a variable called age & assign to it your age. Show
// your age in an alert box.
 var age=23;
 alert(age)

//  Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.


var visits=14
alert("you have visited this site " + visits   + " " + "times")

// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear=1999

document.write( " my birth birthYear is " + birthYear  + "<br>" + "datatype of decleard variable is num" + "<br>")  



// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var Visitorname= "jhon Doe"
var Producttitle="T-shirt(s)"
var Quantity=5

document.write(Visitorname + " " + "ordered " +Quantity + "_" + Producttitle + " " +"on xyz clothing store" + "<br>")

// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// 1. Declare 3 variables in one statement.
var a , b ,c
// 2. Declare 5 legal & 5 illegal variable names.

var a;
var a_b;
var a1;
var  FirstName
var  a$

// illegal

// var 2a;
// var *Ab;
// var  var;
// var &a
// var %a

document.write("<b>Rules for naming JS variables</b>" + "<br>")

document.write("Variable names can only contain number $ and _" + "<br>")

document.write(" Variables must begin with a letter $ or _"  + "<br>")

document.write("Variable names are case sensitive" + "<br>")

document.write("Variable names should not be JS keyword" + "<br>")