const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
// *                                                                *
//* fs.writeFileSync():  Writes data to file. If the file does not exist, it will be created.
// * if the file exists, it overwrites the content.

//! syntax: fs.writeFileSync(filePath, data, options);
// ? filePath: The file path to write to.
// ? data: Th content to write to the file.
// ? options: Optional .Include encoding (utf8), mode, or flags.

//*  

// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);
// const writeFile = fs.writeFileSync(
//     filePath,
//     "This is th initial data ",
//     "utf-8"
// );
// console.log(writeFile);
 
// *                                                                 *
//* fs.readFileSync(): Reads a file's content and returns it as a string or Buffer.
//! Syntax: const data = fs.readFileSync(filePath, options);
// ? filePath: Path of th file to read.
// ? options: Optional. Ecoding('utf8) to get data as a string.
// *

const readFile = fs.readFileSync(filePath,"utf-8");
console.log(readFile);

// *                                                                 *
//*fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath,data,options);
// ? filePath: Filepath to append to.
// ? data: Content to add to the file.
// ? options: Optional. Encoding options("utf8").
// *

const appendFile = fs.appendFileSync(
        filePath,
        "\nThis is th updated data ",
        "utf-8"
    );
    console.log(appendFile);