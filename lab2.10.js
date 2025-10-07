const hash = {
    Marcus: '+380445554433',
    Emma: '+380962020147',
    Olivia: '+380682345678'
};

function findPhoneByName(name) {
    return hash[name];
}

console.log(findPhoneByName('Marcus'));
console.log(findPhoneByName('Emma'));
console.log(findPhoneByName('Olivia'));