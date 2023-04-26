
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function inBetween(a, b) {
    return (arg) => {
        return arg >= a && arg <= b
    }
}


function inArray(array) {
    return (arg) => {
        return array.includes(arg);

    }
}




console.log(array.filter(inBetween(3, 6)));
console.log(array.filter(inArray([1, 2, 11])));

