let arr = [{ name: 'Marcus Aurelius', phone: '+380445554433' }, { name: 'Emma Johnson', phone: '+380962020147' }, { name: 'Olivia Brown', phone: '+380682345678' }];

function findPhoneByName(name) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].name === name) {
            return arr[i].phone;
        }
    }
}

console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Emma Johnson'));
console.log(findPhoneByName('Olivia Brown'));   