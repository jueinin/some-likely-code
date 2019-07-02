import React from 'react';
import logo from './logo.svg';
import './App.css';
import ABC, {Columns} from 'abc-standard-table';
import ABCStandardTable from "abc-standard-table";
import {message, Table} from "antd";
import 'antd/dist/antd.css';
import {BrowserRouter, Route} from "react-router-dom";
import Test from "./page/test";
import Checkbox from "./components/Checkbox";
import Typography from "./components/typography";
import Show from "./components/typography/show";
import AffixShow from './components/affix/show';
import DropDown from "./components/dropdown/show";
import Resize from './components/resize/show';
import Animate from "./page/animate/animate";
import ScrollToBottom from "./components/swipeToBottom/show";
import FakeForm from './components/fakeForm/show';
import EditableTable from './components/editableTable/show';
let Context = React.createContext("test");
let Component=(props:any)=> {
  return <div>
    {props}
  </div>
}

interface Record {
  name: string;
  sex: string;
  age: string;
}
const App: React.FC = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Route path={'/test'} component={Test}/>
          <Route path={'/checkbox'} component={Checkbox}/>
          <Route path={'/typography'} component={Show}/>
          <Route path={"/affix"} component={AffixShow}/>
          <Route path={'/dropdown'} component={DropDown}/>
          <Route path={"/resize"} component={Resize}/>
          <Route path={"/animate"} component={Animate}/>
          <Route path={"/scrollToBottom"} component={ScrollToBottom}/>
          <Route path={"/fakeForm"} component={FakeForm}/>
          <Route path={'/editableTable'} component={EditableTable}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
