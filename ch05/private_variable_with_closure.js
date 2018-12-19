var assert = require("assert");

// declare a constructor for a Ninja
function Ninja() {
    var feints = 0;
    this.getFeints = function() {
	return feints;
    };
    this.feint = function() {
	feints++;
    };
}

var ninja1 = new Ninja();
ninja1.feint();

assert(
    ninja1.feints === undefined,
    "And the private data is inaccessible to us."
);
assert(
    ninja1.getFeints() === 1,
    "We are able to access the internal feint counts."
);

var ninja2 = new Ninja();
assert(
    ninja2.getFeints() === 0,
    "The second ninja object gets its own feints variable."
);
