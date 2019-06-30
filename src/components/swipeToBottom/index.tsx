import React, {Component} from 'react';
import {throttle} from 'lodash'
interface Props {
    className?: string;
    style?: React.CSSProperties;
    bottomPxToTrigger?: number;
    onScrollToBottom?: (element:HTMLElement) => void;
}
interface State {
    refreshTimes: number;
}
class SwipeToBottom extends Component<Props,State> {
    state:State={
        refreshTimes: 0
    }
    isTop = false;
    firstClientY = 0;
    canRefresh = true;
    onScroll = (e: React.SyntheticEvent) => {
        let {onScrollToBottom} = this.props;
        let element = e.currentTarget as HTMLElement;
        if (element.scrollHeight - element.scrollTop === this.props.bottomPxToTrigger || element.clientHeight) {
            onScrollToBottom && onScrollToBottom(element);
        }
    };
    onTouchMove = (e: React.TouchEvent) => {
        if (this.isTop) {
            // 下拉到一定高度差调用刷新方法
            let heightSub = e.touches.item(e.touches.length - 1).clientY - this.firstClientY;
            console.log(heightSub);
            if (heightSub === 200 && this.canRefresh) {
                console.log("need to refresh");
                this.canRefresh = false;
                this.setState({refreshTimes: this.state.refreshTimes + 1})
            }
        }
    };

    onTouchStart=(e:React.TouchEvent)=>{
        this.isTop = false;
        this.firstClientY = 0;
        this.canRefresh = true;
        if (e.currentTarget.scrollTop === 0) {
            this.isTop = true;
            this.firstClientY = e.touches.item(0).clientY;
        }
    }
    onTouchEnd=(e:React.TouchEvent)=>{
        this.isTop = false;
        this.firstClientY = 0;
        this.canRefresh = true;
    }
    render() {
        let {className,style} = this.props;
        return (
            <div
                onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd} onTouchMove={this.onTouchMove}
                onScroll={this.onScroll} className={className} style={{height: 800,overflow:"auto", ...style}}>
                <div>刷新次数{this.state.refreshTimes}次</div>
                {this.props.children}
            </div>
        );
    }
}

export default SwipeToBottom;