import { readFileSync } from "fs";

export abstract class CSVReader<T> {
  data: T[] = [];
  filename: string;
  abstract mapRow(row: string[]): T;

  constructor(filename: string) {
    this.filename = filename;
  }

  read() {
    this.data = readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((match) => match.split(","))
      .map(this.mapRow);
  }
}
