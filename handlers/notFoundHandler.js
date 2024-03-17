

// dependencies

// module wrapper

const handler = {};

handler.notFoundHandler = () => {
    console.log("Sorry ! This is an invalid route");
}

module.exports = handler;