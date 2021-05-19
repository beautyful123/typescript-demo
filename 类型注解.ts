function greeters(name:object) {
  return "我是"+name
}
let myName = [1,2,3,4]
let num:number = 123

document.body.innerHTML = greeters(myName)

function fn():number {
  return 123
}
console.log(fn())

let a:string;
let b:unknown;
b = "asda"
a = b as string  //断言
a = <string>b
function fn2():never {throw Error()}