// // Write a program to take a number in a variable, do the
// // required arithmetic to display the following result in your
// // browser:

// var a=10;
// document.write("result:"+ "<br> value of a is " +a + "<br>")

// document.write("value of ++a is " + ++a + "<br> now the value of a is " + a + "<br>" )

// document.write("value of a++ is " + a++ + "<br> now the value of a is " + a + "<br>" )


// document.write("value of --a is " + --a + "<br> now the value of a is " + a  + "<br>")
// document.write("value of a-- is " + a-- + "<br> now the value of a is " + a  + "<br>")

// // What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;

// var a=2
// var b=1
// var result = --a - --b + ++b + b--;
// document.write(result + "<br>")
// document.write(a+ "<br>")
// document.write(b+ "<br>")
// // --a; first decreament 
// // --a - --b;  first decreament in "a" then decreament in "b"then subtract a from b
// // --a - --b + ++b; first decreament in "a" then decreament in "b" then increament in 'b'
// //  then subtract' a 'from 'b' and then result add in' b'
// // --a - --b + ++b + b--; first decreament in "a" then decreament in "b" then increament in 'b'
// //  then post decreament in b subtract' a 'from 'b' and then result add in' b' then result add in b

// // Write a program that takes input a name from user &
// // greet the user.

// var a=prompt("enter your name")

// alert("hello " + " " + a  +" " + "have a good day")

// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var input=+prompt("enter a number")
// for(i=1;i<=10;i++){
// if(input===0)
//     {
//         document.write("5"+"*"+i+"="+5*i +"<br>")
//  }
//   else{
// document.write(input+"*"+i+"="+input*i +"<br>")
// }
// }




// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var sub1=prompt("input sub1")
var sub2=prompt("input sub2")
var sub3=prompt("input sub3")
var total=100
var mark_of_sub1= +prompt("enter mark_of_sub1")
var mark_of_sub2= +prompt("enter mark_of_sub2")
var mark_of_sub3= +prompt("enter mark_of_sub3")
var percentage1=mark_of_sub1/total*100
var percentage2=mark_of_sub2/total*100
var percentage3=mark_of_sub3/total*100
var sum=mark_of_sub1+mark_of_sub2+mark_of_sub3
var per=sum/300*100

document.write("<table>" +"<tr><th>subject</th> <th>Total marks</th> <th>obtain marks</th> <th>percentage</th></tr>"
+"<tr><td>" +sub1+ "</td><td>" + total +"</td><td>" +mark_of_sub1 +"</td> <td>"+ percentage1 +"%"+"</td></tr>"+
"<tr><td>" +sub2+ "</td><td>" + total +"</td><td>" +mark_of_sub2 +"</td> <td>"+ percentage2 +"%"+"</td></tr>"+
"<tr><td>" +sub3+ "</td><td>" + total +"</td><td>" +mark_of_sub3 +"</td> <td>"+ percentage3 +"%"+"</td></tr>"+
"<tr><td>" + "&nbsp &nbsp &nbsp &nbsp &nbsp"+ "</td><td>" + 300 +"</td><td>" +sum+"</td> <td>"+ per +"%"+"</td></tr>"+



"</table>")