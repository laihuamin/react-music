import React, {Component} from 'react';

export default class SliderArrow extends React.Component{
    constructor(props){
        super(props);
    }
    handleArrowClick(option){
        this.props.turn(option);
    }
    render(){
        return(
            <div className="slider-arrow-wrapper">
                <span
                    className="slider-arrow slider-arrow-left"
                    onClick={this.handleArrowClick.bind(this, -1)}>&lt;</span>
                <span
                    className="slider-arrow slider-arrow-right"
                    onClick={this.handleArrowClick.bind(this, 1)}>&gt;</span>
            </div>
        )
    }
}