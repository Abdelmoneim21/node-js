/** file system */

const fs = require("node:fs");
//read file
console.log("first");
// blocking code (synchronous)
// const fileContent = fs.readFileSync("./hello.txt", "utf8");
// console.log("fileContent :", fileContent);

// console.log("second");

// non blocking code (asyncrhnous)
// const read = fs.readFile("./hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("error in ", err);
//   } else {
//     console.log(data);
//   }
// });

// console.log("second");

//write to file

// fs.writeFile(
//   "./users.json",
//   JSON.stringify([{ id: 1, name: "mohamed" }]),
//   (err) => {
//     if (err) {
//       console.log("error when creating file", err);
//     }
//   }
// );

//delete file

// fs.unlink("./users.json", (err) => {
//   if (err) {
//     console.log("error when deleting file", err);
//   } else {
//     console.log("file deleted");
//   }
// });

// streams [Readable,writable]

// const rStrweam = fs.createReadStream("./hello.txt", "utf-8");
// const wstream = fs.createWriteStream("./stream.txt", "utf-8");
// rStrweam.on("data", (chunk) => {
//   console.log("chunk====", chunk);
//   wstream.write("\n ===chunk=== \n");
//   wstream.write(chunk);
// });
// 52:52 min
