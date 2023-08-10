export enum MATCH_RESULTS {
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW = "D",
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MATCH_RESULTS,
  string
];
