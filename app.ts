"use strict";

import * as express from "express";
import * as bodyParser from "body-parser";
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import {Customer} from "./app/models/customer";

let app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




/**************************************************
 *                CREATE OUR DATABASE
 **************************************************/
createConnection({
    driver: {
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "<username>",
        password: "<password>",
        database: "<databse>"
    },
    // Add all models automatically
    entities: [ 
        Customer
    ],
    // Keep database synced each run
    autoSchemaSync: true,
}).then(async connection => {

    /**************************************************
     *             ROUTES FOR OUR API - V1
     **************************************************/
    let routerV1 = express.Router();              // get an instance of the express Router

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    routerV1.get('/', function(req: express.Request, res: express.Response) {
        res.json({ message: 'hooray! welcome to our api!' });
    });

    // V2 routes will come here.

    /**************************************************
     *                REGISTER OUR ROUTES
     **************************************************/
    app.use('/', routerV1);
    
    /**************************************************
     *                START UP SERVER
     **************************************************/
    // Start the server
    app.listen(3000, () => {
        console.log("Server listening on port %d in %s mode", 3000, app.settings.env);
    });

})
    .catch(error => console.log(error));