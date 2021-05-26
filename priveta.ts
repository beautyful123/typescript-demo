/**
 * priveta: 私有属性
 *  不能实例化后用.修改，定义修改方法，还可以控制
 *  不能继承后访问，仅仅定义的类可访问
 * public: 共有属性
 * protected： 受保护的属性
 *  可以继承后访问
 * 实例化后还是不能.访问修改
*/
(() => {
  class A{
    public name: string
    protected age: number
    constructor(name:string,age:number) {
      this.name = name;
      this.age = age;
    }
    set setAge(num:number) {
      this.age = num
      console.log("age现在是"+this.age)
    }
    get setAge() {
      console.log(this.age)
      return this.age
    }
  }
  const a = new A("于立伟", 112)
  a.name = "秦媛丽"
  a.setAge = 190
  a.setAge
  console.log(a)
  // class B extends A{
  //   test() {
  //     console.log(this.age)
  //   }
  // }
})()