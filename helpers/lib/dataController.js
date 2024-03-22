

// dependencies

const path = require("node:path");
const fs = require("node:fs");

// module wrapper

const handle = {}
handle.basedir = path.join(__dirname, "../../database/");
console.log(handle.basedir)

handle.create = (dir, file, content, callback) => {

    fs.open(path.join(handle.basedir, dir, file + ".json"), "wx", (err, fd) => {

        if(!err && fd) {

            fs.writeFile(fd, content, (err) => {
                if (!err) {

                    fs.close(fd, (err) => {
                        if(!err) {
                            callback(null);
                        }
                        else {
                            callback(err);
                        }
                    })

                }
                else {
                    callback(err);
                }
            })

        }
        else {
            callback(err);
        }
    })

}


handle.read = (dir, file, callback) => {

    fs.open(handle.basedir, dir, file, (err, fd) => {
        if(!err && fd) {

        }
        else{
            callback(err);
        }
    })
}