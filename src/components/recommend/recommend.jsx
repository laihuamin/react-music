import React, {Components} from 'react';
import Slider from '../../base/slider/slider.jsx';
import {getRecommendSlider} from '../../api/recommend.js';
import {ERROR_OK} from '../../common/js/config.js';

class Recommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }
    componentDidMount(){
        getRecommendSlider().then((res) => {
            if(res.code === ERROR_OK){
                const post = res.data.slider;
                console.log(post);
                this.setState({items: post});
            }
        })
    }
    render () {
        return (
            <Slider 
                autoplay={true}
                items={this.state.items}
                dots={true}
                arrow={true}
                speed={1.2}
                delay={1.5}
                pause={true}
            />
        )
    }
}


export default Recommend;