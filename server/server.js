const path = require('path');  //引入路径
const webpack = require('webpack') //引入webpack
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const httpProxy = require('http-proxy');
const Koa = require('koa');

const app = new koa();
const port = 3000;// 监听的端口是3000 locahost:3000
const compiler = webpack(config);
//创建对象实例
const proxy = httpProxy.createProxyServer({});
app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath:config.output.publicPath,
        stats: {
            colors: true
        }
    })
);
app.use(Koa.static("static"));
app.use(webpackHotMiddleware(compiler));

app.get("*", function(req, res) {
    //当路径中含有/news时，使用代理对象实例进行反向代理，获得百度新闻api返回值
    if (req.path.indexOf("/recommend") != -1) {
        proxy.web(req, res, {
            target: "https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg",
            secure: false,
            changeOrigin: true
        });
    } else {
    // 否则默认返回App应用
    res.sendFile(path.join(__dirname, "index.html"));
    }
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info(
            "==>Listening on port %s. Open up http://localhost:%s/ in your browser.",
            port,
            port
        );
    }
});

