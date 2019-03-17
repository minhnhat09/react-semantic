const fs = require("fs");

let contents = fs.readFileSync("./cards.json", "utf8");
let cards = JSON.parse(contents);



