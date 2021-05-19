class Dog{
  name: string;
  age: number;
  constructor(name:string,age:number) {
    console.log("构造函数执行");
    this.name = name;
    this.age = age;
  }
}
let d1 = new Dog("王八三",123)
console.log(d1)