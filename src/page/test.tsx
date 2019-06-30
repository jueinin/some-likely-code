import React from 'react';
import {Component} from 'react';

let ChenContext = React.createContext({
  name:"chen"
});
let Provider = ChenContext.Provider;
let Consumer = ChenContext.Consumer;
class Test extends Component {
  render() {
    return (
      <div>
        <Provider value={{name: "chenfdfd"}}>
          <TTT/>
        </Provider>
      </div>
    );
  }
}
let T=React.forwardRef((props, ref:any) => {
  return <TTT {...props} ref={ref}/>
})
class TTT extends React.PureComponent<any,any>{
  //static contextType = ChenContext;                 // 通常context会被包装包装,变成高阶组件传递props给真正的组件
  render() {
    return (
      <div>ddddd</div>
    );
  }
}

export default Test;