import { writeFileSync } from "fs";
import type { OutputTarget } from "../Reporter";

export class HTMLTarget implements OutputTarget {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  print(report: string): void {
    const HTMLContent = `
    <div>
        <h1>Analysis Output</h1>
        <div>
            <p>${report}</p>
        </div>
    </div>
    `.trim();

    writeFileSync(`${this.filename}.html`, HTMLContent);
  }
}
