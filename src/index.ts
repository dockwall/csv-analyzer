import { CSVReader } from "./CSVReader";
import { MATCH_RESULTS } from "./MatchResult";

const matches = new CSVReader("data/football.csv");
matches.read();

let manWins = 0;

for (let match of matches.data) {
  if (
    (match[1] === "Man United" && match[5] === MATCH_RESULTS.HOME_WIN) ||
    (match[2] === "Man United" && match[5] === MATCH_RESULTS.AWAY_WIN)
  ) {
    manWins++;
  }
}

console.log(manWins);
