import * as React from 'react';
interface Props {

}
interface State {

}
interface FieldMetaInterface {
    value: unknown;
}
interface SetFieldParam {
    name: string;
    value: unknown;
}
class Store {
    fields:{[name:string]: FieldMetaInterface} = {};
    getFieldValue=(name:string)=>{
        return this.fields[name].value;
    }
    setFieldValue=(param:SetFieldParam)=>{
        this.fields[param.name].value = param.value;
    }
}

export default Store;