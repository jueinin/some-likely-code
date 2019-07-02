import React, {Component} from 'react';
import {createForm} from "./index";
import {Button, Input} from "antd";
class Show extends Component<any,any> {
    onClick=()=>{
        this.props.form.setFieldValue("chen","dafafa")
    }
    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <div>
                {getFieldDecorator("chen",{initialValue: "dasa"})(
                    <Input onChange={()=>{
                        console.log("dada");
                    }}/>
                )}
                <Button onClick={this.onClick}>显示值</Button>
            </div>
        );
    }
}

// @ts-ignore
export default createForm(Show,{});
