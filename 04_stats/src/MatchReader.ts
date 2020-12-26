import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    static fromCsv(filename: string): MatchReader {
        // Create an instance of MatchReader and pass in something that satisfies "DataReader"
        // interface with
        // Create an object that satisfies the "DataReader" interface.
        return new MatchReader(new CsvFileReader(filename));
    }

    matches: MatchData[] = [];
    constructor(public reader: DataReader) { }

    load(): void {
        this.reader.read();
        this.matches = this.reader.data
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            });
    }
}