import { readFileSync } from "fs";

const rawData = readFileSync("data/football.csv", { encoding: "utf-8" });
const matches = rawData.split("\n").map((match) => match.split(","));

const HOME_WIN = "H";
const AWAY_WIN = "A";

let manWins = 0;

for (let match of matches) {
  if (
    (match[1] === "Man United" && match[5] === HOME_WIN) ||
    (match[2] === "Man United" && match[5] === AWAY_WIN)
  ) {
    manWins++;
  }
}

console.log(manWins);
