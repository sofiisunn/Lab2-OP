function average(a, b) {
    return (a + b) / 2;
}

function square(x) {
	return x ** 2;
}

function cube(x) {
	return x ** 3;
}

function calculate() {
    let arr = [];
    for (let i = 0; i <= 9; i++) {
    const sq = square(i);
    const cb = cube(i);
    const av = average(sq, cb);
    arr.push(av);
    }
    return arr;
}

console.log(calculate());