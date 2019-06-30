import React, {Ref} from 'react';
import {Component} from 'react';
import {Button, Icon, Spin} from "antd";
import MySpin from './components/spin';
import message from "./components/notification";

class Components extends Component<{},{}> {
  componentDidMount(): void {
  
  }
  openNotification=()=>{
    // @ts-ignore
    message.open();
  }
  closeNotification=()=>{
  }
  render() {
    return (
      <div>
        <Button onClick={this.openNotification}>notification</Button>
        <Button onClick={this.closeNotification}>close</Button>
      </div>
    );
  }
}
export default Components;