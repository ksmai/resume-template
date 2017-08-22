const path = require('path');

const paths = {};
paths.src        = path.resolve(__dirname, 'src');
paths.docs       = path.resolve(__dirname, 'docs');
paths.assets     = path.resolve(__dirname, 'assets');
paths.publicPath = '/resume-template/';

paths.index   = path.join(paths.src, 'index.html');
paths.favicon = path.join(paths.assets, 'favicon.svg');
paths.main    = path.join(paths.src, 'main.js');

module.exports = paths;
