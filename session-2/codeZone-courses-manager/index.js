// commander package installation

import { Command } from "commander";
import inquirer from "inquirer";
const program = new Command();
import fs from "fs";

const filePath = "./courses.json";
const questions = [
  {
    type: "input",
    name: "title",
    message: "please enter course title",
  },
  {
    type: "number",
    name: "price",
    message: "please enter course price",
  },
];
program
  .name("codeZone-course-manager")
  .description("CLI to help with courses")
  .version("1.0.0");

program
  .command("add")
  .alias("a")
  .description("add a course")
  .action(() => {
    inquirer.prompt(questions).then((answers) => {
      if (fs.existsSync(filePath)) {
        fs.readFile(filePath, "utf-8", (err, fileContent) => {
          if (err) {
            console.log("error ==>", err);
            process.exit();
          }
          console.log("file content :", fileContent);
          const fileContentAsJson = JSON.parse(fileContent);
          fileContentAsJson.push(answers);
          fs.writeFile(
            filePath,
            JSON.stringify(fileContentAsJson, null, 2),
            "utf-8",
            () => {
              console.log("Add courses Done");
            }
          );
        });
      } else {
        fs.writeFile(filePath, JSON.stringify([answers]), "utf-8", () => {
          console.log("Add courses Done");
        });
      }
    });
  });

program
  .command("list")
  .alias("l")
  .description("list all courses")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, content) => {
      if (err) {
        console.log("error in reading file", err);
        process.exit();
      }
      console.table(JSON.parse(content));
    });
  });

program.parse();

// inquirer package from npm
// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "programming",
//       message: "what is your favourite programming language",
//     },
//   ])
//   .then((answer) => {
//     console.log(answer);
//   });
