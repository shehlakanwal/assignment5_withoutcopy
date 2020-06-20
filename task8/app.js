// // 1. Declare an empty array using JS literal notation to store
// // student names in future.
// // 2. Declare an empty array using JS object notation to store
// // student names in future.
// // 3. Declare and initialize a strings array.
// // 4. Declare and initialize a numbers array.
// // 5. Declare and initialize a boolean array.
// // 6. Declare and initialize a mixed array.
// // 7. Declare and Initialize an array and store available
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed
// // qualifications in your browser like:

// // literal=["" ,""]    js literal notation
// // object=[ {}, {}]     js object notation 
// var literal=[]
// var object=[]
// var string_array=["bio","chemistry","phy","urdu","isl"]
// var num_array=[1,2,3,4,5,6]
// var boolean_array=[true, false]
// var mixed_array=["bio",1,2,3,true,]

// var  qualifications=["SSC " , "HSC " , "BCS " , "BS " ,"BCOM " , "MS " , "M.phil " , "Phd " ]

// for(i=0;i<=8;i++){

//     document.write(i+1 +")"+qualifications[i]+"<br>" +"<br>")
// }



// // Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// var student1=prompt("enter 1st student name")
// var student2=prompt("enter 2nd student name")
// var student3=prompt("enter 3rd student name")

// var score1=prompt("enter scores of student1")
// var score2=prompt("enter scores of student2")
// var score3=prompt("enter scores of student3")

// var total=500;
// var per1=score1/total*100
// var per2=score2/total*100
// var per3=score3/total*100

// document.write("score of "+student1 + " "+"is:"+ " "+score1+"." +"percentage:"+per1+"%"+"<br>")
// document.write("score of "+student2+ " "+"is:"+ " "+score2+"."+ "percentage:"+per2+"%"+"<br>")
// document.write("score of "+student3 + " "+"is:"+ " "+score3+"." +"percentage:"+per3+"%"+"<br>")



// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// var color=["red", "blue","green","yellow"," orange","pink"]
// document.write(color +"<br>")
// var beginning=prompt("which color u want to add at the begining of the array")
// color.unshift(beginning)
// document.write(color +"<br>")
// var end =prompt("which color u want to add at the end of the array" )
// color.push(end)
// document.write(color +"<br>")
// color.unshift("black ", "white ")
// document.write(color + "<br>")
// color.pop()
// document.write(color +"<br>")
// var desired_index=+prompt("At which index you want to add the color")
// var new_color=prompt("which color do u want to add")
// color.splice(desired_index,0,new_color)
// document.write(color +"<br>")
// var desired_index1=+prompt("At which index you want to delete the color")
// var deleted_item=+prompt("how many items you want to delete from desired positions")
// color.splice(desired_index1,deleted_item)
// document.write(color)

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


// var student_score=[320,230,480,120]
// student_score.sort()
// document.write(student_score)

// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var city_names=["karachi","islamabad","quetta","lahore","peshawar"]
// document.write(city_names+"<br>")
// var selectedCities=[]
// selectedCities=city_names.slice(2,5)
// document.write(selectedCities)

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is" ,  "my" , "cat"];
// var single_string=arr.join(" ")
// document.write(single_string)


// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


// FIFO     LIFO

// A queue is one of the most common uses of an array. In computer science, 
// this means an ordered collection of elements which supports two operations:

// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, 
// so that the 2nd element becomes the 1st.
// Arrays support both operations.
// In practice we need it very often. For example, a queue of messages that need to be shown on-screen.
// There’s another use case for arrays – the data structure named stack.
// It supports two operations:
// push adds an element to the end.
// pop takes an element from the end.
// For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out)
//  principle. For queues, we have FIFO (First-In-First-Out).


// var arr=[]

// arr.push("apple")
// arr.push("banana")
// arr.push("orange")
// arr.push(" mango")
// document.write(arr  + "<br>")

// var returnvalue1=arr.shift()
// document.write("Output: <br>"+ returnvalue1 +"<br>")

// var returnvalue2=arr.shift()
// document.write("Output: <br>"+ returnvalue2 +"<br>")

// var returnvalue3=arr.shift()
// document.write("Output: <br>"+ returnvalue3 +"<br>")

// var returnvalue4=arr.shift()
// document.write("Output: <br>"+ returnvalue4) +"<br>"


// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// var arr=[]
// arr.push("apple")
// arr.push("banana")
// arr.push("orange")
// arr.push(" mango")

// document.write(arr  + "<br>")

// var returnvalue1=arr.pop()
// document.write("Output: <br>"+ returnvalue1 +"<br>")

// var returnvalue2=arr.pop()
// document.write("Output: <br>"+ returnvalue2 +"<br>")

// var returnvalue3=arr.pop()
// document.write("Output: <br>"+ returnvalue3 +"<br>")

// var returnvalue4=arr.pop()
// document.write("Output: <br>"+ returnvalue4) +"<br>"


// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


    var  fruit = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"]

    document.write(
  "<select><Option>" +fruit[0] +"</Option>" +
  "<Option>" +fruit[1] +"</Option>" +
  "<Option>" +fruit[2] +"</Option>" +
  "<Option>" +fruit[3] +"</Option>" +
  "<Option>" +fruit[4] +"</Option>" +
"</select>")

