import jsonp from './jsonp.js';
import {commonParams, options} from '../common/js/config.js';

export const getRecommendSlider = () => {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    return jsonp(url, data, options);
}