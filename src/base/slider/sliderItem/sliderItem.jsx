import React, {Component} from 'react';
import './sliderItem.less';

export default class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let {count, item} = this.props;
        let width = 100 / count + '%';
        return (
            <li className="slider-item" style={{width: width}}>
                <img src={item.img} alt={item.alt} />
            </li>
        )
    }
}