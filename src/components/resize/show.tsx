import React from 'react';
import {Component} from 'react';
import Resize from "./index";
import {Link, Prompt} from "react-router-dom";
class Show extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <div>ddfafa</div>
        <Resize defaultWidth={200}>
          <div style={{wordWrap: 'break-word'}}>
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
            dafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafadafafafafa
          </div>
        </Resize>
        <div style={{flexGrow: 1}}>
          <Link to={"/"}>DFfafa</Link>
        </div>
          <Prompt message={"你确定走吗"} when={true}/>
      </div>
    );
  }
}

export default Show;
