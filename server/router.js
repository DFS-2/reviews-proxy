require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const proxy = require('http-proxy-middleware');
const compression = require('compression');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(compression());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/', express.static(path.join(__dirname, '../public')));
// app.use('/:hostId', express.static(path.join(__dirname, '../public')));

app.use(
  '/api/reviews',
  proxy({ target: 'http://54.176.224.38:3004', changeOrigin: true })
);

// app.listen(3000);

app.listen(port, () => console.log(`Proxy server listening on port ${port}!`));