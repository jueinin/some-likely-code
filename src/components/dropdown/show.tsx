import React from 'react';
import {Component} from 'react';
import DropDown from "./index";

class Show extends Component {
  render() {
    return (
     <div>
       <DropDown overlay={<div>overlay</div>}>
         点我出现弹框
       </DropDown>
       {Array.from(Array(200).keys()).map(value=>{
         return <span>{value}<br/></span>
       })}
     </div>
    );
  }
}

export default Show;
