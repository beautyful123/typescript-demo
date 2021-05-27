(function() {
  abstract class Animal{
    type: string
    constructor(a:string) {
      this.type = a
    }
    abstract say():void
  }
  class Dog extends Animal{
    constructor(a:string) {
      super(a)
    }
    say() {
      console.log(123)
    }
  }
  let a = new Dog("狗")
  // console.log(a)
  // a.say()
  // new Animal("猫")
})()