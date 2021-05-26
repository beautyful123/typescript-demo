(() => {
  /**
   * 泛型： 
   *  不确定返回类型时
   */
  function fn<T>(name:T):T {
    return name
  }
  let a = fn<number>(23123)
  console.log(a)

  // class Fn2<T>{
  //   name: T
  //   constructor(name:T) {
  //     this.name = name
  //   }
  // }
  /**
   * 简写，public省略this.name = name
   */
  class Fn2<T>{
    constructor(public name:T) {
    }
  }
  let b = new Fn2<string>('yuliwei')
  console.log(b)
})()