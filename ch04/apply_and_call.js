/*
call and apply, can come in handy whenever it's expedient to usurp
what would normally be the function context with an object of our own
chosing-something that cna be particaularly useful when invoking
callback functions.
*/


var assert = require("assert");

function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
	result += arguments[n];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

assert(ninja1.result === 10, "juggled via apply");
assert(ninja2.result === 26, "juggled via call");
