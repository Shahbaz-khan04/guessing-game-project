#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

let score = 0;
let guessAgain = true;

(async () => {
  await showBanner(`Guessing Game`, `created by Shahbaz Khan`, "green");
})();
async function guessingNumber() {
  while (guessAgain) {
    let randomNumber: number = Math.ceil(Math.random() * 2 + 1);
    let ans = await inquirer.prompt([
      {
        name: "userInput",
        type: "number",
        message: "Enter any number b/w 1 to 3",
      },
    ]);
    if (ans.userInput === randomNumber) {
      console.log(chalk.green("You guessed the right number!"));
      score += 10;
      console.log(chalk.yellow(`Your score is: ${score}`));
    } else {
      console.log(chalk.red("try again."));
      guessAgain = false;
    }
  }
}
setTimeout(() => {
  guessingNumber();
}, 1000);
