import React from 'react';
import {Component} from 'react';
import './index.css';
interface Props {
  defaultWidth?: number;
}
interface State {
  width?: number | string;
}
class Resize extends Component<Props,State> {
  state= {
    width: this.props.defaultWidth || 200
  }
  wrapper = React.createRef<HTMLDivElement>()
  onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    console.log(e);
    let ele = this.wrapper.current as HTMLDivElement;
    let left = ele.getBoundingClientRect().left;
    // ele.style.width = e.clientX - left + "px";
    this.setState({
      width: e.clientX - left + "px"
    })
  };
  onDrop=(e:React.DragEvent)=>{
  
  }
  render() {
    return (
      <div className={"chen-wrapper-resize"} ref={this.wrapper} style={{width: this.state.width}}>
        {this.props.children}<div draggable={true} onDrag={this.onDrag} className={'chen-line'}/>
      </div>
    );
  }
}

export default Resize;
