import React, {ComponentType} from "react";

interface Props {
    [key: string]: any;
    [keys: number]: any;
}
function withMobx(injectFunction:(props:Props)=>any) {
    return function (WrapperComponent:React.ComponentType) {
        return class extends React.Component{
            injectedProps:Props;
            constructor(props:Props) {
                super(props);
                this.injectedProps = injectFunction(this.props);
            }
            render() {
                return <WrapperComponent {...this.props} {...this.injectedProps}/>
            }
        }
    }
}

export default withMobx;