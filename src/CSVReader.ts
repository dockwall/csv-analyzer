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
      .map((matchArr) => [
        convertStringToDate(matchArr[0]),
        matchArr[1],
        matchArr[2],
        parseInt(matchArr[3]),
        parseInt(matchArr[4]),
        matchArr[5] as MATCH_RESULTS,
        matchArr[6],
      ]);
  }
}
