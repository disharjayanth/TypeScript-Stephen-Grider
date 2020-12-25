import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader("football");
csvFileReader.read();

let manUnitedWins = 0;

for (let match of csvFileReader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Number of games won by ManUnited: ${manUnitedWins}.`);