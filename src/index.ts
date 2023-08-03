import { readFileSync } from "fs";

const rawData = readFileSync("data/football.csv", { encoding: "utf-8" });
const matches = rawData.split("\n").map((match) => match.split(","));

enum MATCH_RESULTS {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D",
}

let manWins = 0;

for (let match of matches) {
  if (
    (match[1] === "Man United" && match[5] === MATCH_RESULTS.HOME_WIN) ||
    (match[2] === "Man United" && match[5] === MATCH_RESULTS.AWAY_WIN)
  ) {
    manWins++;
  }
}

console.log(manWins);
