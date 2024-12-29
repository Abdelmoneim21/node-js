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
// cpu tasks

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

// network tasks in node js

// fetch("https://dummyjson.com/products").then(() => {
//   console.log("End of request ->", performance.now() - start);
// });
// fetch("https://dummyjson.com/products").then(() => {
//   console.log("End of request ->", performance.now() - start);
// });
// fetch("https://dummyjson.com/products").then(() => {
//   console.log("End of request ->", performance.now() - start);
// });

/********************************************************** http server **************************************/

const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request", req.url);
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end("Page not found");
  }
});

server.listen(3001, () => {
  console.log("listenning on port 3001");
});
