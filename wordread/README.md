> `TypeScript`官方文档阅读
# 基础数据类型
  布尔值：boolean
  数字：number(包含十进制十六进制二进制八进制)
  字符串：string
  *数组：
    1. 元素类型后跟[]
        let list: number[] =  [1, 2, 3];
    2. *使用泛型
      let list: Array<number> = [1, 2, 3];
  *元组：tuple（固定元素数量和类型的数组）
    let a = [string,number]  定义一个长度为2,第一个string,第二个number的数组
  *枚举: enum
    枚举是对基本元素类型的拓展
    enum demo {男 = 1, 女 = 10}
    let a:demo = demo.name;
    let b:string = demo[1]  //男
  任意类型: any
  空类型: void
  null和undefined
  never: 表示的是那些永不存在的值的类型
# 类型断言
let a:any = "我叫小沈阳"    
let b:number = (<string>a).length
let b:number = (a as string).length
# 变量声明
  es2015相关内容asd   