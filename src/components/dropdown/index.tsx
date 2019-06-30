import React from 'react';
import {Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';
interface Props {
  overlay?: React.ReactElement;
}
interface State {
  parentClicked: boolean;
}
class DropDown extends Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state={
      parentClicked: false
    }
  }
  parentDiv = React.createRef <HTMLDivElement>();
  wrapper: HTMLDivElement | undefined = undefined;
  childWraper: HTMLDivElement | undefined = undefined;
  onParentClick = () => {
    if (this.state.parentClicked) {
      return;
    }
    let parentDiv = this.parentDiv.current as HTMLDivElement;
    if (!this.wrapper) {
      this.wrapper = document.createElement("div");
      this.wrapper.classList.add("wrapper");
      document.body.appendChild(this.wrapper);
      this.wrapper.onclick = this.onWrapperClick;
    }
    let clientRect = parentDiv.getBoundingClientRect();
    if (!this.childWraper) {
      this.childWraper = document.createElement("div");
      this.childWraper.style.position = "fixed";
      this.childWraper.style.left = clientRect.left + "px";
      this.childWraper.classList.add("childWraper");
      this.childWraper.style.top = clientRect.top + parentDiv.clientHeight+15 + "px";
      if (this.props.overlay) {
        ReactDom.render(this.props.overlay, this.childWraper);
      }
      document.body.appendChild(this.childWraper);
    }
  };
  onWrapperClick=()=>{
    if (this.wrapper) {
      document.body.removeChild(this.wrapper);
      this.wrapper = undefined;
    }
    if (this.childWraper) {
      document.body.removeChild(this.childWraper);
      this.childWraper = undefined;
    }
  }
  render() {
    
    return (
      <div ref={this.parentDiv} onClick={this.onParentClick}>
       {this.props.children}
      </div>
    );
  }
}

export default DropDown;
