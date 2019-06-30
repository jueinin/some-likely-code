import React from 'react';
import {Component} from 'react';
import classNames from 'classnames';
import "./index.css";
interface Props {
  offsetBottom?: number;
  offsetTop?: number;
  target?: () => any
}
class Affix extends Component<Props,{}> {
  render() {
    let {offsetBottom, offsetTop} = this.props;
    let className = classNames("sticky");
    return <div className={className}>
      {this.props.children}
    </div>;
      }
}

export default Affix;
