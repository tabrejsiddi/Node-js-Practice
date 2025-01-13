const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName);

//! syntax: fs.writeFileSync(path, data, options, callback);
//? callback: a function with an err parameter.


fs.writeFile( filePath, "this is the initial data ", "utf-8", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file written successfully");
    }
});


//? fs.readFile(): Reads the content of the file asynchronously and returns the data as a buffer or string.
// ! Syntax: fs.readFile(path , options , callback);
//? callback: a function with two parameters (err,data)

fs.readFile( filePath,  "utf-8", (err,data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    
//* fs.appendFile(): Appends data to a file asynchronously.If the file doesn't exist,it is created.
//! Syntax: fs.appendFile(path, data, options, callback);


fs.appendFile( filePath, "\nthis is the Updated data ", "utf-8", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file written successfully");
    }
});

//* fs.unlink(): Deletes a file asynchronously.
//! Syntax: fs.unlink(path, callback);
fs.unlink(filePath, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file deleted successfully");
    }
})