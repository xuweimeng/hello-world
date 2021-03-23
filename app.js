const express = require('express');
const app = express();
const path = require("path");
app.get('/', function(req, res) {
    res.send("hello, world222!")
});
app.get('/user', function(req, res) {
        res.send('Got a PUT request at /user')
    })
    // app.set("views", path.join(__dirname, 'dist'))
app.use(express.static(path.join(__dirname, '../build')))
app.listen(8082, () => console.log('Example app listening on port 3000 by react!'))
                                                           