/**
 * Created by Rihards on 2/15/2016.
 */

/* "Use Strict" is directive in JavaScript for helping us to prevent "sloppy code"
    it helps us to write secure JavaScript and avoid bad syntax which is allowed in JS.
    You can apply strict mode to whole JS file or only specific function.
    With strict mode, you can not, for example, use undeclared variables.
    Examples:

     "use strict";
      x = 4;       // This will cause an error (x is not defined)

-----------------------------------------------------------------------

     "use strict";
     myFunction();

     function myFunction() {
     y = 3;   // This will also cause an error (y is not defined)
     }


     #2 Variable/function-Hoisting

     In JS all variable declarations are hoisted to the top of the function if it is declared inside the function.
     If variable is outside of function its declaration will be hoisted on top of JS file. Only variable declarations
     are hoisted not variable initialization or assignment of value. Good coding style would be to declare your variables
     at the top of the function.
     Examples:

     function showName () {
     console.log ("First Name: " + name);
     ​var name = "Ford";
     console.log ("Last Name: " + name);
     }
     ​
     showName ();
      ​ First Name: undefined​  // variable var name; is hoisted on top of the function so first print out is Undefined.
     ​  Last Name: Ford​

    Function hoisting allows us to use function before it is declared in our source code.
    Example:

     // Outputs: "Yes!"
     isItHoisted();

     function isItHoisted() {
     console.log("Yes!");
 }

    Function hoisting happens only for it declaration not functions expressions.
    Example:
*/
     // Outputs: "Definition hoisted!"
     definitionHoisted();

     //TypeError: undefined is not a function
     //definitionNotHoisted();

     function definitionHoisted() {
     console.log("Definition hoisted!");
     }

     var definitionNotHoisted = function () {
     console.log("Definition not hoisted!");
     };
/*
     #4 Function Closures and the JS Module Pattern

     Function closure is an inner function that has access to outer functions variables and parameters and also global
     variables. Closures ar useful for hiding variables within the parent function and also we can avoid variable name
     collision.
     Example:
*/
     function showName() {
     var name = "Rihards";
        //this inner function has access to the outer function variables.
     function displayName() {
     console.log("My name is: " + name);
     }
     return displayName;
     }

     var myFunc = showName();
     myFunc();

    /*
    #5 Immediately-Invoked Function Expressions(IIFE)
     IIFE is a javaScript function that runs as soon as it is declared.
    example of IIFE:

     (function(){
     //do something
     }
     )()

     it is usefull to avoid declaring variables in the global scope.

     #6 JavaScript Prototyping

     Every JS function has a prototype property and you can add properties and methods to this prototype if you want to
     implement inheritence.
     Example:


     */
     function Person (first, last, age, eyeColor){
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eyeColor;
     }

     var person1 = new Person("Rihards", "Pacevics", 27, "green");

     //adding prototype for prety printing
     Person.prototype.nicePrint = function(){
          console.log("You name is " + this.firstName + " " + this.lastName + ", you`re " + this.age + " years old " +
          "\nand your eye color is " + this.eyeColor + ".");
     }

     person1.nicePrint();

/*
     #8 User defined Callback functions


 */