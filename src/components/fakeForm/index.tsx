import * as React from "react";
import {ReactElement} from "react";
import Store from "./store";
import {Input} from "antd";
import {on} from "cluster";
interface DecoratorOption {
    initialValue?: any;
    value: any;
}
let store = new Store();
function createForm(Component: any, options: DecoratorOption) {
    return class T extends React.Component{
        getFieldValue=(name:string)=>{
            return store.getFieldValue(name);
        }
        setFieldValue = (name: string, value: any) => {
            store.setFieldValue({
                name,value
            })
            this.forceUpdate();
        };
        getFieldDecorator = (name: string, options: DecoratorOption) => {
            let value = options.value || options.initialValue;
            if (!store.fields[name]) {
                store.fields[name] = {
                    value: value
                };
            }
            return (WrappedComponent: any) => {
                let originOnChange = WrappedComponent.props.onChange;
                let onChange = (e: React.SyntheticEvent, originOnChange: (e: React.SyntheticEvent) => void) => {
                    // @ts-ignore
                    let value = e.target.value;
                    store.setFieldValue({name, value})
                    this.forceUpdate();
                    originOnChange && originOnChange(e);
                }
                return React.cloneElement(WrappedComponent, {
                    value: store.getFieldValue(name),
                    onChange: (e) => onChange(e, originOnChange)
                });
            }
        };
        render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
            let form: any = {};
            form.getFieldDecorator = this.getFieldDecorator;
            form.getFieldValue = this.getFieldValue;
            form.setFieldValue = this.setFieldValue;
            return <Component form={form} />
        }
    }
}

export {createForm};