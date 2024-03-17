

// dependencies
const http =  require("node:http");
const { resReqHandlers } = require("./helpers/reqResHandlers");

//  module wrapper

const app = {};

// configuration

app.config = {
    port: 4000,
}

// server 

app.server = http.createServer(resReqHandlers);

app.server.listen(app.config.port, () => {console.log("Server is running well on port 4000")});



module.exports = app.server;