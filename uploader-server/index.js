const formidable = require('formidable');

const uuid = require('node-uuid');

const fs = require('fs');

const express = require('express');
const http = require('http');

const path = require('path');
const pkg = require('../package.json');
const webpack = require('webpack');

const app = express();
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);

function node_upload(req, callback, next) {
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = __dirname + '/uploads/';
    form.maxFieldsSize = 10 * 1024 * 1024;
    //解析
    form.parse(req, function (err, fields, files) {
        if (err) return callback(err);

        for (const file in files) {
            //后缀名
            const extName = /\.[^\.]+/.exec(files[file].name);
            const ext = Array.isArray(extName) ? extName[0] : '';
            //重命名，以防文件重复
            const avatarName = uuid() + ext;
            //移动的文件目录
            const newPath = form.uploadDir + avatarName;
            fs.renameSync(files[file].path, newPath);
            fields[file] = {
                size: files[file].size,
                path: newPath,
                name: files[file].name,
                type: files[file].type,
                extName: ext
            };
        }
        callback(null, fields);
    });
}

app.post('/upload', function (req, res, next) {
    node_upload(req, function (err, fields) {
        // setTimeout(function(){
        res.json(fields);
        // }, 1000);
    }, next);
});

http.createServer(app).listen(8002, function () {
    console.log(path.join('ggg', '22'));
    console.log(__dirname);
    console.log(path.resolve(__dirname, 'component'));
    console.log('Express server listening on port 8002');
});
