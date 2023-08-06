import { readFileSync } from "fs";
import { convertStringToDate } from "./utils";
import { MATCH_RESULTS } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MATCH_RESULTS, string];

export class CSVReader {
  data: MatchData[] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  read() {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((match) => match.split(","))
      .map(this.mapRow);
  }

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
