

// dependencies 

const fs = require("node:fs");

// module wrapper

const handler = {};

handler.homeRouteHandler = (reqProps, cb) => {
    console.log("Home is working well");

    cb(200, {});
    
}

module.exports = handler;