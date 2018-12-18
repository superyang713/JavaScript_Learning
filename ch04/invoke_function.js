function skulk(name) {}
function Ninja(name) {}

// invoked as a function
skulk("Hattori");
(function (who) { return who; })("Hattori");

var ninja = {
    skulk: function(){},
}

// invoked as a method of ninja
ninja.skulk("Hattori");

// invoked as a constructor
ninja = new Ninja("Hattori");

// invoked via the call method
skulk.call(ninja, "Hattori");

// invoked via the apply method
skulk.apply(ninja, ["Hatori"]);
