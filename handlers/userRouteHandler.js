

// dependencies



// module wrapper

const handler = {}



handler.userRouteHandler = (reqProps, cb) => {

    const acceptableMethods = ["get", "post", "put", "delete"];

    console.log(reqProps.method);

    if(acceptableMethods.includes(reqProps.method.toLowerCase())) {


        // handler._methods.get();

        handler._methods[reqProps.method.toLowerCase()]();


    }


    cb(200, {});


}


handler._methods = {};

handler._methods.get = () => {
    console.log("Get is working");

}

handler._methods.post = () => {
    console.log("Post is working");
}

handler._methods.put = () => {
    console.log("Put is working");
}

handler._methods.delete = () => {
    console.log("Delete is working");
}


module.exports = handler