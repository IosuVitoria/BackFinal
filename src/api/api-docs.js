"use strict";
const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerUI = require("swagger-ui-express");

const swaggerOptions={
    swaggerDefinition:{
        info:{
            versions:"1.1.0",
            title:"Docu APIasdfasdfasdfasdfasa",
            description:"API Documentacion",
            contact:{
                name:"rodigo angulo"
            },
            
            servers:["http://localhost:5000"]

        }
    },
    basePath:"/",
    apis:["./routes/*.routes.js"]


};
const swaggerDocs = swaggerJSDoc (swaggerOptions);
app.use("/",swaggerUI.serve, swaggerUI.setup(swaggerDocs));

module.exports = app;