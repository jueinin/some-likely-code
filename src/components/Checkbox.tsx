import React from 'react';
import {Component} from 'react';
import "./checkbox.css";
class Checkbox extends Component {
  render() {
    return (
      <React.Fragment>
        <input className={'checkbox'} type={"checkbox"}/><span className={'check-title'}>{this.props.children}</span>
      </React.Fragment>
    );
  }
}

class Render extends React.Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <Checkbox>陈</Checkbox>;
  }
  
}

export default Render;