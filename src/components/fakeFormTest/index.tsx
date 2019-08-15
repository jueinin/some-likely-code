import React, {Component} from 'react';
import {Input} from "antd";
import _ from 'lodash';
import withMobx from "../../module/withMobx";
import {observable} from "mobx";
import {observer} from "mobx-react";
class Test {
    count:any={
        count: 1
    }
    addCount=()=>{
        this.count={
            count: 2
        }
    }
}
class TwoFieldValidate extends Component<any> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <div>
            {this.props.test.count.count}
            <button onClick={this.props.test.addCount}>add</button>
        </div>
    }
}

export default withMobx(props => {
    return {
        test: new Test()
    }
})(TwoFieldValidate);