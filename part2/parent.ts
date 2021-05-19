/**
 * es6类  class Person{}
 * 
 * 静态属性（类属性） static
 *   class Person{
 *      static name = "ylw"
 *   }
 * Person.name
 * 
 * 实例属性(实例方法类似)
 *    class Person{
 *      name: "yuliwei"
 *      readonly age: 12
 *    }
 * new Person().name
 * 可修改， readonly可为只读属性
 * 
 * 
 * 
*/
class Parent{
  name = "yuliwe"
  age = 12
  // constructor(a:string,b:number) {
  //   this?.name = a
  //   this?.age = b
  // }
}
const name1 = new Parent();
console.log(name1.name,name1.age)