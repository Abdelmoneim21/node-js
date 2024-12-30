const http = require("node:http");
const fs = require("node:fs");
const home_page = fs.readFileSync("./views/index.html", "utf-8");
const cssFile = fs.readFileSync("./views/style.css", "utf-8");
const server = http.createServer((req, res) => {
  console.log("req ======");
  console.log(req.url);

  if (req.url === "/") {
    res.write(home_page);
  } else if (req.url === "/about") {
    res.write("<h1>about page</h1>");
  } else if (req.url === "/contact") {
    res.write("<h1>contact page</h1>");
  } else if (req.url === "/style.css") {
    res.write(cssFile);
  } else {
    res.statusCode = 404;
    res.write("<h1>page not found</h1>");
  }
  //   res.write("hello world !");
  //   res.write(
  //     JSON.stringify({
  //       id: 1,
  //       name: "ahmed",
  //       title: "user 1",
  //       description: `ahmed is the first user to acces this server `,
  //     })
  //   );
  res.end();
});
server.listen("5000", "localhost", () => {
  console.log("listening on port 5000");
});
