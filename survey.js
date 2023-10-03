const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = {};

const askQuestion = (index) => {
  if (index < questions.length) {
    rl.question(`${questions[index]} `, (answer) => {
      answers[`question${index + 1}`] = answer;
      askQuestion(index + 1);
    });
  } else {
    generateProfile();
  }
};

const generateProfile = () => {
  console.log("\nProfile Generated:");
  console.log(`Name: ${answers.question1}`);
  console.log(`Activity: ${answers.question2}`);
  console.log(`Music: ${answers.question3}`);
  console.log(`Favorite Meal: ${answers.question4}`);
  console.log(`Favorite Food: ${answers.question5}`);
  console.log(`Favorite Sport: ${answers.question6}`);
  console.log(`Superpower: ${answers.question7}\n`);
  rl.close();
};

askQuestion(0);
