const format = require("./format-powiainanum.js")
const PowiainaNum = require("../PowiainaNum.js/PowiainaNum.js")
let a = new PowiainaNum("l0 s1 a[17.32,[1,1,1,1],[3,1,1,1],[19999,1,1,1], [\"x\",555, 1, 1], [1,7,2,1],[2,5,2,1],[4,5,2,1]]");
//a.array.push(["x", 4, 1, 1]);
/*a.array.push([1,94,2,1]);
a.array.push([2,1,2,1]);
a.array.push([90,49,2,1])
a.array.push(["x",5,2,1])
*/
format.toggle()
b = a.clone()
c = a.clone()
console.log(format(b))
//console.log(format.myPolarize(c.array,0, 1))

