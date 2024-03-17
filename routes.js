


//  dependencies

const { homeRouteHandler } = require("./handlers/homeRouteHandler");
const { aboutRouteHandler } = require("./handlers/homeRouteHandler");


// module wrapper

const routes = {
    "home": homeRouteHandler,
    "about": aboutRouteHandler,
}



module.exports = routes;