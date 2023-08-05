import { readFileSync } from "fs";

export class CSVReader {
  data: string[][] = [];
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  read() {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((match) => match.split(","));
  }
}
