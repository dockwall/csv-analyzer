import { MatchReader } from "./customCSVReaders/MatchReader";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { ConsoleTarget } from "./outputTargets/ConsoleTarget";
import { HTMLTarget } from "./outputTargets/HTMLTarget";
import { Reporter } from "./Reporter";

const matches = new MatchReader("data/football.csv");
matches.read();

const matchesConsoleReporter = new Reporter(
  new WinsAnalyzer("Man United"),
  new ConsoleTarget()
);
matchesConsoleReporter.buildAndReportAnalysis(matches.data);

const matchesHTMLReporter = new Reporter(
  new WinsAnalyzer("Man United"),
  new HTMLTarget("man-united-wins-report")
);
matchesHTMLReporter.buildAndReportAnalysis(matches.data);
