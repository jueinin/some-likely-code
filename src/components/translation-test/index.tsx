import React, {Component} from 'react';
import {I18nextProviderProps, WithTranslation, withTranslation,useTranslation} from 'react-i18next';
import i18n from './i18nConfig';
import {message} from "antd";
import lodash from 'lodash';


let t = i18n.t.bind(i18n);
let changeLanguage = i18n.changeLanguage.bind(i18n);

interface Props {

}
let message1=()=>{
    message.success(i18n.t("title.success"));
}
// @ts-ignore
@withTranslation()
class Index extends Component<any,any> {
    changeLocale=(name: string)=>{
        // let {t, i18n} = this.props
        changeLanguage(name);
        console.log(i18n.language,"fsfs");
    }

    render() {
        // console.log(this.props.i18n === i18n,'ffaa');
        console.log(lodash.isEqual(this.props.i18n, i18n));
        return (
            <div>
                <button onClick={() => this.changeLocale("zh")}>change locale to zh</button>
                <button onClick={() => this.changeLocale("en")}>change locale to en</button>
                <button onClick={message1}>message</button>
                {t("Welcome to React")}
            </div>
        );
    }
}
export default Index;