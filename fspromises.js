const fs = require("fs");
const path = require("path");

const fileName = "fspromises.txt";
const filePath = path.join(__dirname, fileName);



const file = __dirname;
fs.promises
.readdir(file)
.then((data) => console.log(data))
.catch((err) => console.log(err));

//* Create (write a file): fs.promises.writeFile()
//* Create or overwrites a file with specified content.
//* The writeFile() method writes data to a file asynchronously.
//* if the file does not exist, it is created.
//* If it exists, its content is replaced.

//! Syntax: fs.promises.writeFile(path,data, options).then().catch();
//? path: path to the file
//? data: COntent to write.
//? options: encoding (utf8), flags, etc. (optional).

fs.promises
.writeFile(filePath, "This is the content of the file","utf-8")
.then(console.log("File has been created"))
.catch((err) => console.log(err));

//* Read ( read a file): readFile()
//* The readFile() method reads data from a file asynchronously.
//* it can return the data as a Buffer or string based on the encoding provided.

//! Syntax: fs.promises.readFile(path, options).then(data => ...).catch(err => ...);
//? path: path to the file
//? options: encoding (utf8) or no encoding for binary data.


fs.promises
.readFile(filePath,"utf-8")
.then((data) => console.log(data))
.catch((err) => console.log(err));

//* Update (append content to a file): appendFile()
//* Adds content to the end of a file;
//* The appendFile() method adds content without overwriting the existing data.
//! Syntax: fs.promises.appendFile(path, data, options).then().catch();
//? path: path to the file
//? data: COntent to append.
//? options: encoding (utf8) or no encoding for binary data.

fs.promises
.appendFile(filePath,"\nthis is the updated data ","utf-8")
.then( console.log("file is updated successfully "))
.catch((err) => console.log(err));

//* The unlink() method deletes a file asynchronously.
//! Syntax: fs.promises.unlink(path).then().catch();