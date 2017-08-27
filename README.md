# react-router
> React Router 4 的每一个部分都是 React 的组件：Router, Route, Link 等等。<br/>
[react-router实例](https://reacttraining.com/react-router/web/example/basic)<br/>

# jsonp
- 先npm按装jsonp
```
npm i jsonp --save
```
- jsonp的使用
```
jsonp(url, opts, fn)
```
> jsonp一共接收三个参数，第一个是url，代表从哪个api获取参数，第二个是option，也就是data，获取的数据结构，第三个fn，callback回调函数，这个在实际开发过程中可以视具体情况和后端约定。
- jsonp的示例
> config.js——存放一些公共的参数，还有公共的回调函数
```
export const commonParams = {
    g_tk: 5381,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    format: 'jsonp'  
}

export const options = {
    param: 'jsonpCallback'
}

export const ERROR_OK = 0;
```
> singer.js——在这里获取第一个轮播图部分的数据
```
import jsonp from 'jsonp';
import {commonParams, options} from '../common/js/config.js';
//引入依赖，以及方法

export const getSlider = () => {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
    const data = Object.assign({}, commonParams, {  //Object.assign是ES6的语法，起到对象合并的作用
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    });
    return jsonp(url, data, options);  //最后return一个jsonp的函数
}
```
- 这个app中的接口
> 1、slider轮播图接口
```
https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg
```