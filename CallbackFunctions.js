/*
Callback function is a function that can be passed to another function as a parameter, and callback function is
called inside the other function.
Example:
 */
var list = ["Rihards","Frederik", "William", "Son", "Teo", "Athinodoros"];
var list2 = [];

list2 = list.filter(function(name) {
    return name.length <=3;
});
console.log(list2);
