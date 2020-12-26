import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football");

// Tell matchReader instance to call .load() method and load .read() method from csvReader
// and read data from .matches
matchReader.load();

// Console report
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// summary.buildAndPrintReport(matchReader.matches);

// HTML report
Summary.winsAnalysisWithHTMLReport("Man United").buildAndPrintReport(matchReader.matches);