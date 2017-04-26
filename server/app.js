const express = require('express');
const morgan  = require('morgan');
const path    = require('path');

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[ctf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.get('/*', (req, res) => {
    console.log(req);
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;