##项目搭建
<b>目录结构</b>
```
package.json  //存放一些npm包的配置文件
app.js  
README.md
bin/   //启动脚本
|__start.js

config/  //存放一些配置文件
|__default.js
|__default.scheme.js
|__production.js

lib/ //存放一些一般代码文件
routes/  //存放路由文件
modles/  //存放自定义模块文件
test/ //存放测试文件
theme/ //存放主题文件
node_modules/
```
<b>package.json</b>
```
{
  "name": "N-club",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "co-cache": "^2.4.1",   
    "co-ejs": "^1.5.2",
    "config-lite": "^2.0.0",
    "koa": "^2.3.0",
    "koa-bodyparser": "^4.2.0",  //请求体解析中间件，相当于express的body-parser
    "koa-errorhandler": "^0.1.1",
    "koa-flash": "^1.0.0",  //相当于concent-flash
    "koa-frouter": "^0.5.0",
    "koa-generic-session": "^2.0.0",  //通讯session中间件，结合mongoDB和redis使用
    "koa-generic-session-mongo": "^0.4.0", //结合koa-generic-session,将session存入到mongodb的中间件
    "koa-gzip": "^0.1.0",
    "koa-logger": "^3.0.1",
    "koa-router-cache": "^2.0.0",
    "koa-scheme": "^2.2.1",
    "koa-static-cache": "^5.1.1",  //缓存静态文件中间件
    "merge-descriptors": "^1.0.1", //合并两个对象的工具模块
    "mongoose": "^4.11.6",  //mongodb的驱动模块
    "validator": "^8.0.0"  //参数验证工具模块
  }
}

```