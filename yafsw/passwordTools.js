
// Use Library
const { sample, random, capitalize } = require("lodash");
const { uniqueNamesGenerator, adjectives, colors } = require("unique-names-generator");
const prompt = require("prompt-sync")();
const sha256 = require("sha256");

// Initiating a welcome of Password Tools
const initialWelcome = [
  // Header  of Password Tools
  "",
  "========================================",
  "Hacktoberfest | YAFSW - Password Tools",
  "----------------------------------------",
  "",
  // Ask which tool of Password Tools that want to use
  "What tool do you want to use?",
  "1. Password Generator",
  "2. Password Checker",
  "3. Password Hasher",
  "",
  "Enter the sequence number of",
  "the tool you want to use"
];

// Render the initialWelcome
initialWelcome.forEach((item) => console.log(item));

// Get the tool of choice that want to use
const selected = prompt();
let result = null;

// Generate result of selected tool
switch (selected) {
  // Tool Password Generator
  case "1":
    const symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
    const text = uniqueNamesGenerator({ dictionaries: [adjectives, colors] });
    
    result = `Password: ${sample(symbol)}${capitalize(text)}${random(1, 100)}`
    
    break;
  // Tool Password Checker
  case "2":
    console.log("")
    console.log("Enter the password you want to check")
    const length = prompt().length + 1 - 1;

    console.log(length)

    if (length < 3) result = "Very Weak"
    else if (length < 5) result = "Weak"
    else if (length < 8) result = "Good"
    else if (length < 10) result = "Strong"
    else if (length < 13) result = "Very Strong"
    else result = "Ultra Strong";

    break;
  // Tool Password Hasher
  case "3":
    console.log("")
    console.log("Enter the password you want to hash")
    const password = prompt();

    result = sha256(password);

    break;
  // Undefined Tool
  default:
    result = "Tool not available";
}

// Initiating a result of Password Tools
const initialResult = [
  "",
  "----------------------------------------",
  "Result",
  "----------------------------------------",
  result,
  "========================================",
  "",
];

// Render the initialResult
initialResult.forEach((item) => console.log(item));
