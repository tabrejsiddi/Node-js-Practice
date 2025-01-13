const fs = require("fs");
const path = require("path");

const fileName = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, fileName);



// const filePath1= __dirname;
// fs.promises
// .readdir(file)
// .then((data) => console.log(data))
// .catch((err) => console.log(err));

// const readFolder = async () => {
//     try {
//       const res = await fs.promises.readdir(filePath1 );
//       console.log(res);
//     } catch (error) {
//         console.error(error);
//     }

// };
// readFolder();

//* fs.promises.writeFile(): Writes data to a file asynchronously. If the file exists, it overwrites the content.
//!  Syntax: fs.promises.writeFile(path, data, options);
//? path: The file path to write to.
//? data: The content to write to the file.
//? options: Optional . Specifies encoding (e.g., 'utf-8'), mode or flag.

// const writeFileExample = async () => {
//   try {
//     await fs.promises.writeFile(
//       filePath,
//       "This is the data that is written to the file",
//       "utf-8"
//     );
//     console.log("file created successfully!");
//   } catch (error) {
//     console.error(error);
//   }
     
// }
// writeFileExample()  ;


//* Reading a file: fs.promises.readFile(): Reads the contents of a file  asynchronously.
//!  Syntax: fs.promises.readFile(path, options);

// const readFileExample = async () => {
//   try {
//     const data = await fs.promises.readFile(
//       filePath,
//       "utf-8"
//     );
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
     
// }
// readFileExample()  ;


//! Syntax: fs.promises.appendFile(path, data, options);

// const appendFileExample = async () => {
//     try {
//       await fs.promises.appendFile(
//         filePath,
//         "\nThis is the updated data that is written to the file",
//         "utf-8"
//       );
//       console.log("file created successfully!");
//     } catch (error) {
//       console.error(error);
//     }
       
//   }
//   appendFileExample()  ;
  
//! Syntax: fs.promises.unlink(path);
const deleteFileExample = async () => {
  try {
    await fs.promises.unlink(filePath);
    console.log("file deleted  successfully!");
  } catch (error) {
    console.error(error.message);
  }
     
}
deleteFileExample()  ;