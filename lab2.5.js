function rangeOdd(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(rangeOdd(15, 30));