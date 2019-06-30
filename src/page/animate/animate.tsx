import React, {Component} from 'react';
import 'animate.css/animate.css';

// import {Prompt} from 'react-router-dom';
class Animate extends Component {
    isInView=(ele: Element)=>{
        let bound = ele.getBoundingClientRect();
        return bound.top > 0 && bound.bottom > 0 && bound.top < window.innerHeight && bound.bottom < window.innerHeight;
    }
    componentDidMount() {
        window.onscroll=(e:Event)=>{
            let test = document.getElementById('test') as HTMLElement;
            let children = test.children;
            for (let i = 0; i < children.length; i++) {
                if (this.isInView(children[i])) {
                    children[i].className="animated bounce"
                } else {
                    children[i].className = "";
                }
            }
        }
    }

    render() {
        return (
            <div id={'test'}>
                {Array.from(Array(1000).keys()).map((value)=>{
                    return <div key={value}>{value}</div>
                })}
            </div>
        );
    }
}

export default Animate;