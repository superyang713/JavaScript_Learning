var assert = require('assert');

function infiltrate(person) {
    assert(person === "gardener", "The person is a gardener");
    assert(arguments[0] === "gardener", "The first argument is a gardener");

    arguments[0] = "ninja";

    assert(person === "ninja", "The person is a ninja now");
    assert(arguments[0] === "ninja", "The first argument is a ninja");

    person = "gardener";
    
    assert(person === "gardener", "The person is a gardener once more");
    assert(arguments[0] === "gardener", "The first argument is a gardener again");
}

infiltrate("gardener"); 
