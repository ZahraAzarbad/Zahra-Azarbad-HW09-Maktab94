
function elem(value) {
    console.log(value);
}

const f1000 = delay(elem, 1000);
const f1500 = delay(elem, 2000);

f1000("delayed for 1 sec");
f1500("delayed for 2 sec");



function delay(func, ms) {
    return (arg) => {
        setTimeout(() => {
            func(arg)
        }, ms);
    }
}



