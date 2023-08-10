import type { OutputTarget } from "../Reporter";

export class ConsoleTarget implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
