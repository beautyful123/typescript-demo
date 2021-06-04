(() => {
  // type a = {label: string}
  // let fn = function(objs: a):void {
  //   console.log(objs.label)
  // }
  // let obj = {name: 12,label:"我是与李庆伟"}
  // fn(obj)
  // let a: {label:string}
  // a = {label: "string",name:123}

  /**
   * 接口
   */
  interface a {
    label: string
  } 
  function fn(obj:a):void {
    console.log(obj['age'])
  }
  let obj:{label: string,age: number} = {label: "我是于立伟",age: 12}
  fn(obj)
})()