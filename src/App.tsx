import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/translation-test/i18nConfig'
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
import CodeMirrorTest from './components/codeMirror/show';
import Translate from './components/translation-test/show';
import TwoField from './components/fakeFormTest/show';
import WorkerTest from "./components/webworker";
// @ts-ignore
import MobxTest from './components/mobxantd/show';
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
          <Route path={"/codemirror"} component={CodeMirrorTest}/>
          <Route path={'/mobxtest'} component={MobxTest}/>
          <Route path={'/translate'} component={Translate}/>
          <Route path={"/twoField"} component={TwoField}/>
          <Route path={"/worker"} component={WorkerTest}/>
        </BrowserRouter>
      </div>
  );
}

export default App;
