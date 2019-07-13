import React from "react";
import {Table, Button, Input, Form} from 'antd'
import {action, observable} from 'mobx'
import {observer,inject,Provider} from 'mobx-react'
import 'antd/dist/antd.css';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: React.ReactNode) => <a href="javascript:;">{text}</a>,
    }
];
const data = [
    {
        key: '1',
        name: 'John Brown',
    },
];

class Store {
    @observable editing=false;
    that=this
    @observable text = "";
    @observable.ref form: any;
    @action setForm = (form: any) => this.form = form;
    @observable test={
        t: 1,
        get m(){
            return 
        }
    }
}

// @ts-ignore
@inject(stores => ({store: stores.store}))
// @ts-ignore
// @Form.create()
@observer
class Cell extends React.Component<any, any> {

    componentDidMount() {
        console.log('did mount');  // 可以发现每次输入都会remount
    }
    onChange=(e:any)=>{
        this.props.store.text = e.target.value;
    }
    render() {
        let {getFieldDecorator} = this.props.store.form;
        // @ts-ignore
        return <div {...this.props}>
            {getFieldDecorator("daa", {
                initialValue: "wii",
                // getValueFromEvent: (e:any)=>{
                //     let value=e.target.value;
                //     console.log(value,"get value from event");
                //     return value
                // },
                // normalize: (value: any) => {
                //     console.log(value);
                //     return value
                // }
            })(<Input/>)}
            {/*<Input value={this.props.store.text} onChange={this.onChange}/>*/}
            {/*{this.props.store.isEditing?"editing":"no edit"}*/}
        </div>
    }
}
// @ts-ignore
@Form.create()
@inject((stores:any, nextProps:any) => {
    // stores.store.setForm(nextProps.form);  //拿到form对象,以进行后续操作,验证之类的
    return {
        store: stores.store
    }
})
@observer
class TableComponent extends React.Component<any,any> {
    onClick=()=>{
        // @ts-ignore
        this.props.store.editing = !this.props.store.editing;
    }

    constructor(props:any) {
        super(props);
        this.props.store.setForm(this.props.form);
    }

    componentDidMount(): void {
        // this.props.store.setForm(this.props.form);
    }

    component={
        body: {
            cell: Cell
        }
    }
    render() {
        return <div>
            <Table columns={columns} dataSource={data} pagination={false} components={this.component}/>
            {/*<Cell/>*/}
            <Button onClick={this.onClick}>切换编辑模式</Button>
        </div>
    }
}
class APP extends React.Component {
    render() {
        return <Provider store={new Store()}>
            <TableComponent/>
        </Provider>
    }
}

export default APP;