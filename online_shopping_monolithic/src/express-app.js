const express = require('express');
const cors  = require('cors');
const {products, shopping, appEvents } = require('./api');
const HandleErrors = require('./utils/error-handler')


module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    // app.use((req, res, next) =>{
    //     console.log(req)
    //     next()
    // })

    appEvents(app);
    //api
    products(app);
    shopping(app);

    app.use((req, res, next) =>{
        console.log(req)
        next()
    })

    // error handling
    app.use(HandleErrors);
    
}