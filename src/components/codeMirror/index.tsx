import React, {Component, FormEvent} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/sql/sql';
class CodeMirrorTest extends Component {
    codeMirror: CodeMirror.Editor | undefined = undefined;
    componentDidMount(): void {
        this.codeMirror=CodeMirror(document.getElementById("code") as HTMLElement,{
            mode: "sql",
            value: `
                SELECT 
                A.id AS id,
                A.sec_uni_code AS sec_uni_code,
                A.trade_date AS trade_date,
                A.pcurrency_type AS pcurrency_type,
                A.excurrency_type AS excurrency_type,
                A.price_type AS price_type,↵A.exchange_price AS exchange_price,
                A.data_source AS data_source,↵A.createtime AS createtime,
                A.updatetime AS updatetime,↵A.id AS status↵FROM for_spot_price A
                
            `,
            lineNumbers: true,
        })
        this.codeMirror.on("change",((instance, change) => {
            console.log(instance.getValue());
        }))
    }
    onChange=(instance:FormEvent<HTMLDivElement>)=>{
        let codeMirror = this.codeMirror as CodeMirror.Editor;
        // codeMirror.set
    }
    render() {
        return (
            <div>
                <div onChange={this.onChange} id={'code'}>

                </div>
                {/*<button onClick={this.onChange}>click</button>*/}
            </div>
        );
    }
}

export default CodeMirrorTest;
