var assert = require("assert")

var outerValue = "samurai";
var later;

function outerFunction() {
    var innerValue = "ninja";

    function innerFunction() {
	assert(outerValue === "samurai", "I can see the samuri.");
	assert(innerValue === "ninja", "I can see the ninja.");
    }
    // stores a reference to innerFunction in the later variable.
    // Because later is a global scope, it'll allow us to call the
    // function later.
    later = innerFunction;
}

outerFunction();

later();
