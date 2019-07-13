import React, {Component} from 'react';
import "antd/dist/antd.css";
import "./index.css";
import {Table, Input, InputNumber, Popconfirm, Form, Button} from "antd";
import {FormComponentProps} from "antd/es/form";
import {ColumnProps} from "antd/es/table";

let EditableContext = React.createContext({});
let EditableProvider = EditableContext.Provider;
let EditableConsumer = EditableContext.Consumer;
interface EditableCellProps {
    dataIndex: string,
    title: string;
    type: "Input" | "selection";
}
class EditableCell extends React.Component {
    render() {
        let {} = this.props; // 根据上游onCell给的一些关于record的属性进行渲染 //todo
        return <td>

        </td>;
    }
}
interface DataSourceItem{
    key:string,
    name: string;
    age: number,
    address: string;
}

let dataSource: DataSourceItem[] = [];
Array.from(Array(1000).keys()).forEach(index=>{
    dataSource.push(
        {
            key: index.toString(),
            name: `Edrward ${index}`,
            age: 32,
            address: `London Park no. ${index}`,
        }
    )
})
interface EditableTableProps extends FormComponentProps{

}
interface EditableTableState {
    editingKey: string,
    dataSource: DataSourceItem[]
}
interface TableColumnProps extends ColumnProps<DataSourceItem>{
    editable?: boolean;
}
class EditableTable extends React.Component<EditableTableProps,EditableTableState> {
    constructor(props:EditableTableProps){
        super(props)
        this.state={
            dataSource: dataSource,
            editingKey: ""
        }
    }
    thisRowIsEditing=(record:DataSourceItem)=>{
        return record.key===this.state.editingKey
    }
    onSave=(record:DataSourceItem)=>{

    }
    onCancel=(record:DataSourceItem)=>{
        this.setState({
            editingKey: ""
        })
    }
    onEdit=(record:DataSourceItem)=>{
        this.setState({
            editingKey: record.key
        })
    }
    getColumns=()=>{
        let column=[
            {
                dataIndex: "name",
                editable: true,
                title:"name",
                width: 200,
            },
            {
                title: "age",
                dataIndex: "age",
                width: 200,
                // onCell: ()
            },
            {
                title: "address",
                dataIndex: "address",
                editable: true
            },
            {
                title: "操作",
                render: (text:any,record:DataSourceItem,index:number)=>{
                    let isThisRowEditing=this.thisRowIsEditing(record);
                    if(isThisRowEditing){
                        return <span>
              <a onClick={()=>this.onSave(record)}>save</a>
              <a onClick={()=>this.onCancel(record)}>cancel</a>
            </span>
                    }else{
                        return <Button disabled={this.state.editingKey!==""&&!isThisRowEditing}  onClick={()=>this.onEdit(record)}>edit</Button>
                    }
                }

            }
        ]
        return column
    }
    render(){
        return <EditableProvider value={this.props.form}>
            <Table dataSource={this.state.dataSource} columns={this.getColumns()}/>
        </EditableProvider>
    }
}


export default Form.create()(EditableTable);