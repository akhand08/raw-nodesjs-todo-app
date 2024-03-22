


//  dependencies

const { homeRouteHandler } = require("./handlers/homeRouteHandler");
const { aboutRouteHandler } = require("./handlers/homeRouteHandler");
const { userRouteHandler } = require("./handlers/userRouteHandler");

// module wrapper

const routes = {
    "home": homeRouteHandler,
    "about": aboutRouteHandler,
    "user": userRouteHandler,
}



module.exports = routes;