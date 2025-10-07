function fn() {
    const obj1 = {name: 'Lisa'};
    let obj2 = {name: 'Rose'};

    obj1.name = 'Jennie';
    obj2.name = 'Annie';
    obj2 = {name: 'Annie'};

    return {obj1, obj2};
}

console.log(fn());