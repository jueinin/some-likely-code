import React, {Component} from 'react';
import {Form} from "antd";
import {FormComponentProps} from "antd/es/form";
import TwoFieldValidate from "./index";
interface Form1 extends FormComponentProps{

}
class Show extends Component<Form1> {
    render() {
        return (
            <div>
                <TwoFieldValidate/>
            </div>
        );
    }
}

export default Form.create()(Show);
