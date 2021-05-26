// 属性私有化，只能class内部使用，不能new fn()后 .使用
(function fn() {
  // class Person{
  //   public name: string
  //   private age: number
  //   constructor(name:string,age:number) {
  //     this.name = name 
  //     this.age = age
  //   }
  //   setAge(num:number) {
  //     // 年龄不可设置负值
  //     if(num>0) {
  //       this.age = num
  //     }
  //   }
  // }
  // const fam = new Person("孙悟空", 10)
  // fam.name = "猪八戒"
  // fam.setAge(-9)
  // console.log(fam)
  class Person{
    _name:string
    constructor(val:string) {
      this._name = val
    }
    get name(){
      return this._name
    }
    set name(val:string) {
      this._name = val
    }
  }
  const a = new Person("yuliwei")
  a.name = "sa"
  console.log(a)
})()