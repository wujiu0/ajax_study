const express = require('express');

const app = express();

// 监听端口启动服务
app.listen(8000, () => {
    console.log('服务启动, 8000端口监听中...');
});

// 创建路由规则
app.get('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //   设置响应体
    response.send('hello ajax');
});

app.all('/server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    //   设置响应体
    response.send('hello ajax_post');
});
app.all('/json-server', (request, response) => {
    // 设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = {
        name: 'wujiu',
    };
    let str = JSON.stringify(data);
    //   设置响应体
    response.send(str);
});

app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('hello');
});
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('hello, axios');
});
