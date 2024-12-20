const fs = require("node:fs");

//read file
// const fileContent = fs.readFileSync("./users.json", "utf-8");
// console.log("file content", fileContent);
// read text file

// const fileText = fs.readFileSync("./hello.txt", "utf-8");
// console.log("file Text", fileText);
console.log("first");
const fileErr = fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR is =>", err);
  } else {
    console.log("FIle Data", data);
  }
});
console.log("second");

console.log(Buffer.from("h").toJSON());
