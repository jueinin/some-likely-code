import {log} from "util";

class Model1 {
  getData() {
    // 此处省略获取数据的逻辑
    return [{
      id: 1,
      name: 'Niko'
    }, {
      id: 2,
      name: 'Bellic'
    }]
  }
}

let wrapper= (model:Model1,key:any)=>{
  let target=Model1.prototype
  let descriptor=Object.getOwnPropertyDescriptor(target,key)
  let log=(...arg:any[])=>{
    let start = new Date().valueOf();
    try {
      // @ts-ignore
      return descriptor.value.apply(this,arg)
    }finally {
      let end = new Date().valueOf();
      console.log("start" + start + " end" + end);
    }
  }
}
