var assert = require("assert");

function forEach(list, callback) {
    for (var n = 0; n < list.length; n++) {
	callback.call(list[n], n);
    }
}

var weapons = [
    { type: "shuriken" },
    { type: "katana" },
    { type: "nunchucks" },
];

forEach(weapons, function(index) {
    assert(this === weapons[index],
	   "Got the expected value of " + weapons[index].type);
    console.log(this);
    console.log(weapons[index])
})
