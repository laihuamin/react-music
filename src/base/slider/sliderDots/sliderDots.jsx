import React, {Component} from 'react';

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
}