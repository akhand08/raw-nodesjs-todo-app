

// dependecies

const url = require("node:url");
const routes = require("../routes")

const { notFoundHandler } = require("../handlers/notFoundHandler");

// module wrapper

const handler = {}


handler.resReqHandlers = function (req, res) {
    
    const method = req.method;
    const headerObj = req.headers;
    const reqURL = url.parse(req.url, true);
    const path = reqURL.path;
    const formatedPath = path.replace(/^\/+|\/+$/g, "");
    const queryObj = reqURL.query;
    const incomingContentType = headerObj["content-type"];
    

    const contentType = headerObj["content-type"];
    const acceptebleContentType = ["application/json", "text/plain"];

    if(acceptebleContentType.includes(incomingContentType)) {

        console.log(formatedPath);

        const chosenRoute = routes[formatedPath] ? routes[formatedPath] : notFoundHandler;
        chosenRoute();
        


    }else {
        res.end("The content type is not acceptable");
    }

    
}


module.exports = handler;