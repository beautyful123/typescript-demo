let obj: object; //
let obj1: {name: string}
obj1 = {name: "ylw"}
let obj2: {name: string,age?: number} //age?:number  可选属性，写的话必须是number
obj2 = {name: 'ylw',age:123} 
let obj3: {name: string,[prop: string]: boolean | string}
obj3 = {name: "ylw",age:false,sex: true}
// let fns: (name:string,age?:number,[prop: string]:string | number)=>string;
// fns = function(a:string,b?:number,[prop:string]:string|number) {
//   return a+b
// }

let arr:number[]
arr = [12,32,]
let arr1: Array<number>
arr1 = [123]
