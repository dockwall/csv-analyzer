import { CSVReader } from "../CSVReader";
import { convertStringToDate } from "../utils";

export enum MATCH_RESULTS {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D",
}

type MatchData = [Date, string, string, number, number, MATCH_RESULTS, string];

export class MatchReader extends CSVReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      convertStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MATCH_RESULTS,
      row[6],
    ];
  }
}
