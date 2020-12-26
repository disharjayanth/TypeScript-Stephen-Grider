"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv("football");
// Tell matchReader instance to call .load() method and load .read() method from csvReader
// and read data from .matches
matchReader.load();
// Console report
// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport());
// summary.buildAndPrintReport(matchReader.matches);
// HTML report
Summary_1.Summary.winsAnalysisWithHTMLReport("Man United").buildAndPrintReport(matchReader.matches);
