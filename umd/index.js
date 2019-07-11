const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './public')));
app.use('/htl-compiler', express.static(path.join(__dirname, '../node_modules/htl-compiler')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
