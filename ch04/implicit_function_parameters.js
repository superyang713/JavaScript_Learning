var assert = require('assert');

function whatever(a, b, c) {
    assert(a === 1, 'The value of a is 1');
    assert(b === 2, 'the value of b is 2');
    assert(c === 3, 'The value of c is 3');

    assert(arguments.length === 5,
	   "We've passed in 5 parameters");

    assert(arguments[0] === 1,
	   "The first argument is assigned to a");
    assert(arguments[1] === 2,
	   'The second argument is assigned to b');
    assert(arguments[2] === 3,
	   'The third argument is assigned to c');

    assert(arguments[3] === 4,
	   'We can access the fourth argument');
    assert(arguments[4] === 5,
	   'We can access the fifth argument');
}

whatever(1, 2, 3, 4, 5);

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
	sum += arguments[i];
    }
    return sum;
}

assert(sum(1, 2) === 3, "We can add two numbers");
assert(sum(1, 2, 3) === 6, "We can add three numbers");
assert(sum(1, 2, 3, 4) === 10, "we can add four numbers");

function sum_rest(...rest) {
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
	sum += rest[i];
    }
    return sum;
}

assert(sum(1, 2) === 3, "We can add two numbers");
assert(sum(1, 2, 3) === 6, "We can add three numbers");
assert(sum(1, 2, 3, 4) === 10, "we can add four numbers");
