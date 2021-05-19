(function() {
  class animal{
    name: string;
    age: number;
    constructor(a:string, b: number) {
      this.name = a
      this.age =  b
    }
    run() {
      console.log(this.name+'在跑')
    }
  }
  class Dog extends animal{
    sex: number;
    constructor(a:string,b:number) {
      super(a,b)
      this.sex = 1;
    }
    say() {
      console.log("汪汪汪")
    }
  }
  class Cat extends animal {
    say() {
      console.log("喵喵喵")
    }
  }
  let dog = new Dog("哮天犬", 12)
  let cat = new Cat("天眼", 100)
  console.log(cat)
  cat.say()
  cat.run()
  console.log(dog)
  dog.say()
  dog.run()
})()