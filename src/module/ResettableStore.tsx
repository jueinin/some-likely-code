import {action} from "mobx";
import warning from "warning";
import _ from "lodash";

class ResettableStore {  // 每个继承这个store的store就会拥有setInitState和reset方法
    _initState: any;            // 在构造函数中调用这个方法保存初始状态,
    setInitState = () => {
        this._initState = {..._.cloneDeep(this), _initState: undefined};
    }
    reset = () => {
        if (!this._initState) {
            warning(true, "请先设置初始值再关闭,setInitState");
            return
        }
        let init = _.cloneDeep(this._initState);
        for (let key in init) {
            if (key === "_initState") continue;
            if (!this._initState.hasOwnProperty(key)) continue;
            (this as any)[key] = this._initState[key];
        }
    }
}


export default ResettableStore;