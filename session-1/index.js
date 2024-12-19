// const os = require("node:os");

// console.log(os.homedir());

// const fs = require("node:fs");
// const fileContent = fs.readFileSync("./test.txt", "utf-8");

// console.log("file content", fileContent);

/**Built IN modules */

const os = require("node:os");
const fs = require("node:fs");
console.log(os.homedir());
console.log(os.platform());
const fileContet = fs.readFileSync("./test.txt", "utf8");
console.log("file content: ", fileContet);

/*Local Modules*/

const logger = require("./logger");

logger.log("$ hello from logger $");
logger.add(2, 6);
