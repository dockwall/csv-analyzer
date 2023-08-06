import { MatchReader } from "./customCSVReaders/MatchReader";
import { MATCH_RESULTS } from "./customCSVReaders/MatchReader";

const matches = new MatchReader("data/football.csv");
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
