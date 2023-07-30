import { readFileSync } from "fs";

const rawData = readFileSync("data/football.csv", { encoding: "utf-8" });
const matches = rawData.split("\n").map((match) => match.split(","));

console.log(matches);
