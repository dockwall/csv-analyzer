export interface Analyzer<T> {
  run(data: T[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Reporter<T> {
  analyzer: Analyzer<T>;
  outputTarget: OutputTarget;

  constructor(analyzer: Analyzer<T>, outputTarget: OutputTarget) {
    this.analyzer = analyzer;
    this.outputTarget = outputTarget;
  }

  buildAndReportAnalysis(data: T[]) {
    const report = this.analyzer.run(data);
    this.outputTarget.print(report);
  }
}
