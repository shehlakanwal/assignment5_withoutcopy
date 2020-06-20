// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// To declare an empty multidimensional array, you use the same syntax as declaring 
// one-dimensional array:

// var empty_multidimentional_array=[]
 
// or alse use this

// var empty_multidimensional_array=[ [] ,[] ,[]]

// var  multidimensional_array=[ [0 ,1,2,3  ]  , [1,0,1,2  ] , [2,1,0,1]]

// document.write(multidimensional_array[0] + "<br>" + "<br>"+multidimensional_array[1] + "<br>" + "<br>"+ multidimensional_array[2])



// 3. Write a program to print numeric counting from 1 to 10.


// var a=[1,2,3,4,5,6,7,8,9,10]

// for (i=0;i<10;i++){

//     document.write(a[i] +"<br>")
// }

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// var table=+prompt("enter a number to show it multiplication table")
// var length=+prompt("enter lenght of table")

// document.write("Multiplication table of"+table+"<br>"+"lenght is"+length+"<br>")
// for(i=1;i<=length;i++)
// {
//    document.write(  table+"*"+i+"=" +table*i +"<br>"  )
// }


// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]


// fruits = ["apple", "banana"," mango", "orange","strawberry"]
// for(i=0;i<5;i++){
// document.write(fruits[i]+"<br>" +"<br>") 

// }
// for(j=0;j<5;j++){
// document.write("element at index "+j+ " " +"is"+ " "+ fruits[j] +"<br>" +"<br>")
// }


// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var Counting= [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var Reverse_counting= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//  var   Even= [0,2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
//   var    Odd= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
//   var    Series= ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"]

//   document.write("<h1>  Counting: </h1>" +Counting+"<br>"+ 
  
//   "<h1>  Reverse counting: </h1>" +Reverse_counting+"<br>"+


//   "<h1>  Even: </h1>" +Even+"<br>"+

//   "<h1>  Odd: </h1>" +Odd+"<br>"+
  
//   "<h1>  Series: </h1>" +Series+"<br>"
  
  
//   )


// You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input = prompt("welcome to ABC Bakery. what do u want to order sir /maam")

// if (input==A[0]){

//     document.write(A[0]+ " "+ "is avalaible at index" + " "+ "0"+ "<br>")
// }

// else if (input==A[1]){

//     document.write(A[1]+ " "+ "is avalaible at index" + " "+ "1"+ "<br>")
// }

//  else if (input==A[2]){

//     document.write(A[2]+ " "+ "is avalaible at index" + " "+ "2"+ "<br>")
// }



//  else if (input==A[3]){

//     document.write(A[3]+ " "+ "is avalaible at index" + " "+ "3"+ "<br>")
// }


//  else  if (input==A[4]){

//     document.write(A[4]+ " "+ "is avalaible at index" + " "+ "4"+ "<br>")
// }


// else { 
//     document.write(   "we are sorry" + " "+ input+ " "+ "is not available")
// }



//SECOND method
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var input=prompt(" welcome to ABC Bakery. what do u want to order sir /maam")
// var a=A.indexOf(input)


// if(a>=0)
// {  
// document.write(input+" "+"available at index"+ " "+ a+" " +"<br>")
// }
   
// if(a<0){
//     document.write(  "we are sorry"+" "+input+" "+" is not available" +"<br>")
// }




// var a = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bkery what do you want to order sir/ma'am")
// var b = a.indexOf(user)
// if(b<0){
//     alert("we are sorry"+user+"is not available in our bakery")
// }
// else{
//     alert(user+"is available at index "+b+" in our bakery") 
// }

// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var arr=[24, 53, 78, 91, 12]

// var output=Math.max(...arr)

// document.write( "Array element is:"+ " "+arr+" " + " <br>"+  "largest number is:"+ " "+ output +"<br>") 

// // Write a program to identify the smallest number in the
// // given array.
// // A = [24, 53, 78, 91, 12]

// var arr = [24, 53, 78, 91, 12]

// var output=Math.min(...arr)

// document.write( "Array element is:"+ " "+arr+" " + " <br>"+  "smallest number is:"+ " "+ output)








// Write a program to print multiples of 5 ranging 1 to
// 100.
for(i=1;i<=100;i++){

    if( i%5==0){

        // document.write( i +"<br>"+"<br>")
        document.write( i +", ")
    }
}

