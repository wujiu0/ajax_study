const express = require('express');

const app = express();

// 创建路由规则
app.get('/', (request, response) => {
  response.send('hello express');
});

// 监听端口启动服务
app.listen(8000, () => {
  console.log('服务启动, 8000端口监听中...');
});
