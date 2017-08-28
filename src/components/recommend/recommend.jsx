import React, {Components} from 'react';
import Slider from '../../base/slider/slider.jsx';
import {getSlider} from '../../api/singer.js';
import {ERROR_OK} from '../../common/js/config.js';
class Recommend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: {}
        }
    }
    ComponentDidMount(){
        getSlider().then((res) => {
            if(res.code === ERROR_OK){
                const post = res.data.slider;
                this.setState({post});
            }
        })
    }
    render () {
        return (
            <div>
                <p>Recommend</p>
                <Slider 
                    autoplay={true}
                    item={this.state.items}
                    dots={true}
                    arrow={true}
                    speed={1.2}
                    delay={1.5}
                    pause={true}
                />
            </div>
        )
    }
}


export default Recommend;