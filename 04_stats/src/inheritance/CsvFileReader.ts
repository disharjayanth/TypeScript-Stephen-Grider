import fs from "fs";

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) { }

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs
            .readFileSync(`${this.fileName}.csv`, {
                encoding: "utf-8"
            })
            .split("\n")
            .map((match) => {
                return match.split(",");
            })
            .map(this.mapRow);
    }
}