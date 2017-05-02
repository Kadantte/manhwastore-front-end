const express = require('express');
const path    = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();
const app = express();

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT ? process.env.PORT : 3000;
const publicPath = path.resolve(__dirname,'..', 'public');
const pathToIndex = path.resolve(__dirname, '..', 'public', 'index.html');

app.use(express.static(publicPath));

if(!isProduction) {
  const bundle = require('./bundle.js');
  bundle();

  app.all('/dist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://0.0.0.0:8080'
    })
  });
}

proxy.on('error', (e) => {
  console.log(e);
})

app.get(/^\/(?!api).*$/, (req, res) => {
    res.sendFile(pathToIndex);
});


module.exports = app;
