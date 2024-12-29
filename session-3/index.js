const fs = require("node:fs");

console.log("first \n");

// blocking

// const fileContent = fs.readFileSync("./hello.txt", "utf-8");

// console.log("File Content -->", fileContent);

// non blocking

// const content = fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("error while reading file", err);
//   } else {
//     console.log("file Content --->", data);
//   }
// });
// console.log("second");

const crypto = require("node:crypto");

const start = performance.now();

// blocking code

// crypto.pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
// console.log("End of PBKDF2 ms", performance.now() - start);
// crypto.pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
// console.log("End of PBKDF2 ms", performance.now() - start);
// crypto.pbkdf2Sync("secret", "salt", 100000, 64, "sha512");
// console.log("End of PBKDF2 ms", performance.now() - start);

// non blocking code

process.env.UV_THREADPOOL_SIZE = 6;

// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });
// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });
// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });
// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });
// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });
// crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, data) => {
//   console.log("End of PBKDF2 ms", performance.now() - start);
// });

fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ->", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ->", performance.now() - start);
});
fetch("https://dummyjson.com/products").then(() => {
  console.log("End of request ->", performance.now() - start);
});
