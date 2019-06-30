import React from 'react';
import {Component} from 'react';
import ReactDom from 'react-dom';
import './notification.scss'

class Notification extends Component<any,any> {
  
  render() {
    return (
      <div style={{height: this.props.height}} className={'notification'}>
        ddddd
      </div>
    );
  }
}
let div = document.createElement("div");
document.body.appendChild(div);
let message = function() {
  let count = 0;
  // @ts-ignore
  this.open=function () {
    ReactDom.render(<Notification height={(count + 1) * 40}/>, document.body);
  }
}
let a={
  m:()=>{
  
},
  n: 1,
  p:()=>{
  
  }
}
export default message;