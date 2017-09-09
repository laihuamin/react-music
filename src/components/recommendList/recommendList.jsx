import React, {Component} from 'react';
import './recommendList.less';

class RecommendList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1 className="list-title">热门歌单</h1>
                <ul>
                    {itemNodes}
                </ul>
            </div>
        )
    }
}