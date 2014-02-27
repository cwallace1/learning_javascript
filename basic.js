// 'use strict';
// HOMEWORK IS TO DISPLAY MASTERY OVER THE BASICS BY UTILIZING DOM MANIPULATION IN THE INDEX.HTML FILE WITH A FUNCTION OR SERIES OF FUNCTIONS REFERENCING THE NOTES CONTAINED BELOW
// // DATA TYPES
// //-----------

// /* Strings */
// 'string' "string"

// /* Numbers */
// 978968756

// /* Boolean */
// true, false, 0, '*'

// var k = '';

// // Always false:
// false, 0, '', null, undefined;

// /* Arrays */
// [], new Array(10), []

// /* Objects */
// // literal
// {
//	'prop': propValue
// }
// 'key value pair'

// /* Functions */
// function foo() {
//	// run some code
// }

// if(k) {
//	// do something
// }

// // VARS
// var foo = 'bar';

// function baz(foo) {
//	foo = 'bang';

//	console.log(foo);
//	next(foo);
// }

// function next() {
//	foo = 'my coworker is trying to distract me'
//	finally(foo);
// }

// if(foo !== 'bang') {
//	foo = 'bang';
// }

// baz(foo);
// console.log(foo);
// // bar

// /* PASS BY*/

// // value
// // primitives
// strings, numbers, booleans


// // reference
// objects, arrays


// var arrayFoo = ['bar', 'baz'];

// function reference(arrayFoo) {
//	arrayFoo[2] = 'bang';
// }

// reference(arrayFoo);

// console.log(arrayFoo);

// var arrayFoo = ['bar', 'baz', 'bang'];


// // OPERATORS
// foo = 'bar';

// console.log(foo);;

// /* conditional */
// ==, ===, &&, ||, !=, !==, >=, <=;

// if(9 === 9 && 9 !== '9' || 9 == '9') {
//	// ?????
// }

// /* arithemetic */

// +, -, /, *, --, ++, -=, +=

// 9

// 'foo'

// foo += ' bar';

// 'foo bar';

function changeBGC(color) {
    alert('Watch out! Here comes a '+color+' background!');
    document.getElementById('basic').className = color;
    var colorArray = ['black','blue','red','white','green'];
    if (color == colorArray[3]) {
        document.getElementById('basic').className += ' whiteFont'; }
    if (color === 'random') {
        var holderArray = ['','','','','',''];
        for (var i=0;i<6;i++){
            var hexArray = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
            var t = Math.floor(Math.random()*16);
            holderArray[i] = hexArray[t];
            }
        var heldColor = holderArray[0]+holderArray[1]+holderArray[2]+holderArray[3]+holderArray[4]+holderArray[5];
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".random {background-color:#"+heldColor+";}";
        document.body.appendChild(css);
        var heldColorArray = heldColor.split("");
        var red = heldColorArray[0]+heldColorArray[1];
        var green = heldColorArray[2]+heldColorArray[3];
        var blue = heldColorArray[4]+heldColorArray[5];
        var red0x = parseInt(red, 16);
        var green0x = parseInt(green, 16);
        var blue0x = parseInt(blue, 16);
        var colorLightness = red0x+green0x+blue0x;
        document.getElementById('basic').className = "random";
        if (colorLightness >= 448) {
            document.getElementById('basic').className += ' whiteFont';}
        alert('Magic color is #'+heldColor+'!');
}}