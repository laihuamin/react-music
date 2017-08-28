import React, {Component} from 'react';
import './sliderDots.less';

export default class SliderDots extends React.Component {
    constructor(props){
        super(props);
    }
    //nowLocal指的是当前图片的index
    //turn是点击dot的回调函数
    handleDotClick(i) {
        let option = i - this.props.nowLocal;
        this.props.turn(option);
    }
    render() {
        let dotNodes = [];
        let {count, nowLocal} = this.props;
        for(let i = 0; i < count; i++){
            dotNodes[i] = (
                <span
                    key={`dot${i}`}
                    className={"slider-dot" + (i === this.props.nowLocal ? "slider-dot-selected" : "")}
                    onClick={this.handleDotClick.bind(this, i)}></span>
            )
        };
        return (
            <div className="slider-dot-wrapper">{dotNodes}</div>
        )
    }
}