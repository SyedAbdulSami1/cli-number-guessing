#! /usr/bin/env node
import inquirer from "inquirer";
const computerGuessNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "PlayerNumber",
        type: "number",
        message: "Please Enter Your Guessing Number between 1 t0 6: ",
    },
]);
if (computerGuessNumber === answer.PlayerNumber) {
    console.log(`Congratulation! you guessed right number.`);
}
else {
    console.log(`Your given number is Wrong, correct number is ${computerGuessNumber}`);
}
