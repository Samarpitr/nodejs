//To print something
console.log("Samarpit Arya")

// Declare a variable
var status = 1233
console.log(status)
//we can assign value to a variable
status = 'sama'
console.log(status)

//making a constant
const dbs = 1234
console.log(dbs)
//Cannot assign value to a constant
// dbs = "samar"
console.log(dbs)

//Gobal vs local scope
var num = 10
function test() {
   var num = 100
   console.log("value of num in test() "+num)
}
console.log("value of num outside test() "+num)
test()


//if statement 
var a = 10
if(a>10) {  
   // statement(s) will execute if the Boolean expression is true  
   console.log("The value of a is greater than 10")
} else if (a==10){
    console.log("The value of a is equal to 10")
} else {
    console.log("The value of a is less than 10")
}

//switch 
var grade = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   }
   case "C": { 
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
} 