function isPrime(value) {
    if (!isPrime.answers) {
	isPrime.answers = {};
    }

    if (isPrime.answers[value] !== undefined) {
	return isPrime.answers[value];
    }

    var prime = value !== 1; // 1 is not a prime
    for (var i = 2; i < value; i++) {
	if (value % i === 0) {
	    prime = false;
	    break;
	}
    }

    return isPrime.answers[value] = prime;
}

assert(isPrime(5), "5 is prime!");
assert(isprime.answers[5], "The answer was cached!");
