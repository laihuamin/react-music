import jsonp from './jsonp.js';
import {commonParams, options} from '../common/js/config.js';

export const getSlider = () => {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const data = Object.assign({}, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'    
    });
    return jsonp(url, data, options);
}