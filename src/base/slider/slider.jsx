import React, {Component} from 'react';
import SliderItem from './sliderItem/sliderItem.jsx';
import SliderDots from './sliderDots/SliderDots.jsx';
// import SliderArrow from './sliderArrow/sliderArrow.jsx';
import './slider.less';

class Slider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nowLocal: 0
        };
    }
    // 向前向后以及前后边界条件处理
    turn(n){
        let _n = this.state.nowLocal + n;
        if(_n < 0){
            _n = _n + this.props.items.length;
        }
        if(_n >= this.props.items.length){
            _n = _n - this.props.items.length;
        }
        this.setState({nowLocal: _n});
    }
    // 自动播放
    goPlay(){
        if(this.props.autoplay){
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }
    // // 滑动
    // setTransition(){

    // }
    // // 开始接触
    // touchStart(){
    //     const me = this;
    // }
    // touchMove(){
    //     const me = this;
    // }
    // touchEnd(){
    //     const me = this;
    // }
    //暂停计时器
    pausePlay(){
        clearInterval(this.autoPlayFlag);
    }
    componentDidMount(){
        this.goPlay();
    }
    render(){
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item, index) => {
            return <SliderItem item={item} count={count} key={'key' + index}/>
        })
        // let arrowNodes = <SliderArrow turn={this.turn.bind(this)}/>
        let dotsNodes = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal}/>
        // 轮播图总长
        let styleObj = {
            width: `${count}00%`,
            transform: `translate3d(-${this.state.nowLocal/count * 100}%, 0, 0)`,
            transition: `1s`
        }
        return (
            <div className="slider-wrapper"
                onTouchStart={this.touchStart}
                onTouchMove={this.touchMove}
                onTouchEnd={this.touchEnd}
                onMouseOver={this.props.pause?this.pausePlay.bind(this):null}
                onMouseOut={this.props.pause?this.goPlay.bind(this):null}>
                >
                <ul className="slider" 
                    style={styleObj}
                    ref="Slider">
                    {itemNodes}
                </ul>
                {this.props.dots?dotsNodes:null}
            </div>
        )
    }
}
Slider.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    // arrow: true,
    item: []
}

export default Slider;