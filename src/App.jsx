import React, { Component } from 'react';
import Title from './components/title/title.jsx';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Singer from './components/singer/singer.jsx';
import Recommend from './components/recommend/recommend.jsx';
import Search from './components/search/search.jsx';
import Rank from './components/rank/rank.jsx';
import './app.less';

class App extends React.Component {
    render() {
        return (
            <div>
                <Title/>
                <Router>
                    <div>
                        <ul className="app-tab">
                            <li className="tab-item"><Link to="/">推荐</Link></li>
                            <li className="tab-item"><Link to="/singer">歌手</Link></li>
                            <li className="tab-item"><Link to="/search">搜索</Link></li>
                            <li className="tab-item"><Link to="/rank">排行</Link></li>
                        </ul>
                        <Route exact path="/" component={Recommend} />
                        <Route path="/singer" component={Singer} />
                        <Route path="/search" component={Search} />
                        <Route path="/rank" component={Rank} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
