process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('./config/express');
let app = express();
app.listen(5000);
module.exports = app;

console.log('Server running at http://localhost:5000/');    