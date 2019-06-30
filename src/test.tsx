// import {log} from "util";
//
// class Model1 {
//   getData() {
//     // 此处省略获取数据的逻辑
//     return [{
//       id: 1,
//       name: 'Niko'
//     }, {
//       id: 2,
//       name: 'Bellic'
//     }]
//   }
// }
//
// let wrapper= (model:Model1,key:any)=>{
//   let target=Model1.prototype
//   let descriptor=Object.getOwnPropertyDescriptor(target,key)
//   let log=(...arg:any[])=>{
//     let start = new Date().valueOf();
//     try {
//       // @ts-ignore
//       return descriptor.value.apply(this,arg)
//     }finally {
//       let end = new Date().valueOf();
//       console.log("start" + start + " end" + end);
//     }
//   }
// }


import {func} from "prop-types";

function sealed(constructor: FunctionConstructor) {
  console.log(constructor.toString());
  return class extends constructor {
    constructor(message: string) {
      super();
      console.log("fake");
    }
    greeting = "my greeting";
  }
  //return constructor
}
function methodDecorator(param?:string) {
  console.log(param);                       // 装饰器要重载才需要返回target  不然不需要
  return function (target: any, propertyKey: string, propertyDescriptor:PropertyDescriptor) {
    console.log(target,propertyKey,propertyDescriptor)
  };
}
function propertyDecorator(prefix: string) {
  return function (constructor: any, name: string) {
    constructor.greeting="ddddddddd"
  };
}
// @ts-ignore

class Cedars {
  
  // @ts-ignore
  @propertyDecorator("Hello")
  greeting: string;
  
  constructor(message: string){
    console.log("constructor ");
    // @ts-ignore
    console.log(this.greeting);
    this.greeting = message;
  }
  //@methodDecorator("method")
  logGreeting() {
    console.log(this.greeting);
    // for (let i = 0; i < 1000000000; i++) {
    //
    // }
  }
}

let d = new Cedars("ddddfds");
d.logGreeting()