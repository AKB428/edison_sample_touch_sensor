/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */
// Leave the above lines for propper jshinting
//Type Node.js Here :)

var mraa_touch = require("mraa");
var touch = new mraa_touch.Gpio(2);
touch.dir(mraa_touch.DIR_IN);

function readTouch() {
        console.log("Gpio is " + touch.read());
}
setInterval(readTouch, 1000);