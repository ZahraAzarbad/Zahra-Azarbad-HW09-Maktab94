// function PassbyReference(obj) {
//   let tmp = obj.a;
//   obj.a = obj.b;
//   obj.b = tmp;
//   console.log(`Inside Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);
// }

let obj = { a: 10, b: 20 }
console.log(`Before calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`); PassbyReference(obj)
console.log(`After calling Pass By Reference Function -> a = ${obj.a} b = ${obj.b}`);



function PassbyReference(obj) {

  const transforObj = Object.assign({}, obj);


  [transforObj.a, transforObj.b] = [transforObj.b, transforObj.a];

  console.log(`Inside Pass By Reference
  Function -> a = ${transforObj.a} b = ${transforObj.b}`);
}