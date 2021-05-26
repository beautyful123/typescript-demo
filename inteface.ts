/** 
 * 接口
 * interface
 * 与type区别，大致相同，用于规范类的结构
 * 接口内的函数都是抽象函数，不能有值
*/

interface myInter{
  name: string;
  age: number;
  say():number
}

class Vfs implements myInter{
  name: string
  age: number
  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
  say(): number {
    return 123
  }
  
}