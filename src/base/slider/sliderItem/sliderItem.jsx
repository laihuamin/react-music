import React, {Component} from 'react';
import './sliderItem.less';

export default class SliderItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="slider-item">
                <img src={this.props.item.picUrl} />
            </li>
        )
    }
}