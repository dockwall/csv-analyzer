import type { Analyzer } from "../Reporter";
import { type MatchData, MATCH_RESULTS } from "../customCSVReaders/types";

export class WinsAnalyzer implements Analyzer {
  team: string;

  constructor(team: string) {
    this.team = team;
  }

  run(data: MatchData[]): string {
    let winsCount = 0;

    for (let match of data) {
      if (
        (match[1] === this.team && match[5] === MATCH_RESULTS.HOME_WIN) ||
        (match[2] === this.team && match[5] === MATCH_RESULTS.AWAY_WIN)
      ) {
        winsCount++;
      }
    }

    return `Team ${this.team} won ${winsCount} matches`;
  }
}
