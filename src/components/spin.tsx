import React from 'react';
import {Component} from 'react';
import classNames from 'classnames'
import './spin.css';

export type SpinSize = "small" | "default" | "large";
export type SpinIndicator = React.ReactNode;
export interface SpinProps {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: string;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
}

export interface SpinState {
  spinning?: boolean;
  notCssAnimationSupported?: boolean;
}
class Spin extends Component<SpinProps,SpinState> {
  static defaultProps={
    spinning: true,
    size: "default",
    tip: ""
  }
  renderIndicator=(indicator:SpinIndicator,prefix:string)=>{
    if (indicator) {
      return React.cloneElement(indicator as any,{
        className: classNames(this.props.className, `${prefix}-dot`)
      })
    }
    return <span className={classNames(`${prefix}-dot`)}>
        <i className={`${prefix}-dot-item`}/>
        <i className={`${prefix}-dot-item`}/>
        <i className={`${prefix}-dot-item`}/>
        <i className={`${prefix}-dot-item`}/>
      </span>
  }
  render() {
    let {size,spinning,tip,className,style,indicator,wrapperClassName} =this.props
    let prefix = "chen";
    let spinClassName=classNames(prefix,{
      [`${prefix}-sm`]: size === "small",
      [`${prefix}-large`]: size==="large",
      [`${prefix}-spinning`]:spinning,
      [`${prefix}-show-text`]: tip,
      [`${prefix}-show-text-with-indicator`]: tip&&indicator
    },className);
    let spinElement = <div className={spinClassName} style={style}>
      {this.renderIndicator(indicator, prefix)}
      <div className={`${prefix}-text`}>{tip}</div>
    </div>;
    if (this.props.children) {
      return <div className={classNames(`${prefix}-nest-loading`)} >
        {spinning && spinElement}
        <div className={classNames(`${prefix}-container`)}>
          {this.props.children}
        </div>
      </div>;
    }
    return spinElement;
  }
}

export default Spin;