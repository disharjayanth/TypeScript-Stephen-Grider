import fs from "fs";

export class CsvFileReader {
    data: string[][] = [];

    constructor(public fileName: string) { }

    read(): void {
        this.data = fs
            .readFileSync(`${this.fileName}.csv`, {
                encoding: "utf-8"
            })
            .split("\n")
            .map((match) => {
                return match.split(",");
            });
    }
}