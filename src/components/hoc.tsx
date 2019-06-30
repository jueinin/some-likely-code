import React from 'react';
import {Component} from 'react';

class Hoc extends Component<any,any> {
  render() {
    return (
      <div>
        {this.props.name || "chen"}
      </div>
    );
  }
}
let enhance=(WrapperdComponent:any):React.ReactElement=>{
  return <WrapperdComponent name={"test"}/>
}

export default enhance(Hoc);