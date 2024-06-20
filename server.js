const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // 你可以选择任何未使用的端口

// 使用body-parser中间件解析请求体
app.use(bodyParser.urlencoded({ extended: true })); // 解析URL编码的数据
app.use(bodyParser.json()); // 解析JSON数据

// POST请求处理路由
app.post('/', (req, res) => {
    // 从请求体中获取数据
    const { name, phone, gj, selections, message } = req.body;

    // 这里可以进行数据验证、处理或存储等操作
    console.log('接收到的数据:', req.body);

    // 假设一切顺利，返回成功响应
    res.status(200).json({
        message: '数据接收成功',
        receivedData: req.body
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器正在运行于 http://localhost:${port}`);
});