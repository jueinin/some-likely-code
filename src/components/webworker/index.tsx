import React, {Component} from 'react';
import Axios from 'axios';
class WorkerTest extends Component {
    state:any={
        count: 0
    }
    addCount = () => {
        this.setState((state:any)=>{
            state.count = state.count + 1;
            return state
        })
    };
    componentDidMount(): void {
        let url = "https://jueinin.oss-cn-hongkong.aliyuncs.com/my/webword%E6%B5%8B%E8%AF%95.json";
        (window as any).webworker = new Worker('./worker.js',{
            type: "module"
        });
        (window as any).webworker.onmessage=(e:MessageEvent)=>{
            console.log(e.data,'共计这么多个column数据');
        }

        Axios.get(url).then((res:any)=>{
            console.log(res);
            (window as any).webworker.postMessage(res.data.data)
        })
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.addCount}>测试卡不卡</button>
            </div>
        );
    }
}

export default WorkerTest;