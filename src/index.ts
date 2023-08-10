import { MatchReader } from "./customCSVReaders/MatchReader";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleTarget } from "./outputTargets/ConsoleTarget";
import { Reporter } from "./Reporter";

const matches = new MatchReader("data/football.csv");
matches.read();

const matchesReporter = new Reporter(
  new WinsAnalyzer("Man United"),
  new ConsoleTarget()
);
matchesReporter.buildAndReportAnalysis(matches.data);
