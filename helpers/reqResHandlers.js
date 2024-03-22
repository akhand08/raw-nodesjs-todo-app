

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
    let body = "";
    console.log(headerObj);


    const reqProps = {
        method,
        headerObj,
        reqURL,
        path,
        formatedPath,
        queryObj,
    }
    

    
    const acceptableContentType = ["application/json", "text/plain", "text/html"];

    if(acceptableContentType.includes(incomingContentType)) {

        let rawBodyData = [];

        req.on("data", (chunk) => {
            rawBodyData.push(chunk);
        })


        req.on("end", () => {

            body = Buffer.concat(rawBodyData);
            
            const chosenRoute = routes[formatedPath] ? routes[formatedPath] : notFoundHandler;
            console.log(formatedPath);

            chosenRoute(reqProps, (statusCode, content) => {

                statusCode = typeof(statusCode) === "number" ? statusCode : 500;
                content = typeof(content) === "object"? content: {};

                res.writeHead(statusCode);
                res.write(JSON.stringify(content));
                res.end();
            });

        } )


    }
    else {
        res.end("The content type is not acceptable");
    }

    
}


module.exports = handler;