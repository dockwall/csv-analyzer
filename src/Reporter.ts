import { MatchData } from "./customCSVReaders/types";

export interface Analyzer {
  run(data: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Reporter {
  analyzer: Analyzer;
  outputTarget: OutputTarget;

  constructor(analyzer: Analyzer, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndReportAnalysis(data: MatchData[]) {
    const report = this.analyzer.run(data);
    this.outputTarget.print(report);
  }
}
