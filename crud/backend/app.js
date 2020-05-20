const express = require('express');
const app = express();
const employeeRoute = require('./api/routes/employee')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Handling CORS issues
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api', employeeRoute)

module.exports = app;





