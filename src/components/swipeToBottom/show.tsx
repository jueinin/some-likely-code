import React, {Component} from 'react';
import SwipeToBottom from "./index";

class Show extends Component {
    render() {
        return (
            <div>
                <SwipeToBottom>
                    {Array.from(Array(100).keys()).map((value, index) => {
                        return <div key={index} style={{height: 100}}>
                            ddd
                        </div>
                    })}
                </SwipeToBottom>
            </div>
        );
    }
}

export default Show;