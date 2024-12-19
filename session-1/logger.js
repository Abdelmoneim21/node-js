function logger(message) {
  console.log("this is message from logger", message);
}

function add(num1, num2) {
  console.log(num1 + num2);
}
module.exports = {
  log: logger,
  add: add,
};
