import React, {Component} from 'react';
import SliderItem from './sliderItem/sliderItem.jsx';
import SliderDots from './sliderDots/SliderDots.jsx';
import SliderArrow from './sliderArrow/sliderArrow.jsx';

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nowLocal: 0
        };
    }
    turn(n){
        let _n = this.state.nowLocal + n;
        if(_n < 0){
            _n = _n + this.props.items.length;
        }
        if(_n > this.props.items.length){
            _n = _n - this.props.items.length;
        }
        this.setState({nowLocal: _n});
    }
}


export default Slider;