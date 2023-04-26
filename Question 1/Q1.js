function test(num = 1) {
    console.log(typeof num)
}
test()
//number
test(undefined)
//number
//if we set nothing(because is undefined too) or undefined for a initialized variable, its type will be types of initial value.
test('')
//string
// the initial value placed by an empty string.
test(null)
//object
  // the initial value placed by null and its an object.
