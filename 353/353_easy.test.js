"use strict";

const expect = require("chai").expect;
const script = require("./353_easy");

describe("Testing challenge #353 [Easy] Closest String", () => {

    it("Should correctly calculate closest string 1", () => {
        let strings = ["ATCAATATCAA", "ATTAAATAACT", "AATCCTTAAAC", "CTACTTTCTTT", "TCCCATCCTTT", "ACTTCAATATA"]
        expect(script.getClosestString(strings)).to.be.equal("ATTAAATAACT");
    });
    it("Should correctly calculate closest string 2", () => {
        let strings = ["CTCCATCACAC", "AATATCTACAT", "ACATTCTCCAT", "CCTCCCCACTC"]
        expect(script.getClosestString(strings)).to.be.equal("AATATCTACAT");
    });
    it("Should correctly calculate closest string 3", () => {
        let strings = ["AACACCCTATA","CTTCATCCACA","TTTCAATTTTC","ACAATCAAACC","ATTCTACAACT","ATTCCTTATTC","ACTTCTCTATT","TAAAACTCACC","CTTTTCCCACC","ACCTTTTCTCA",
        "TACCACTACTT"];
        expect(script.getClosestString(strings)).to.be.equal("ATTCTACAACT");
    });
    it("Should correctly calculate closest string 4", () => {
        let strings = ["ACAAAATCCTATCAAAAACTACCATACCAAT","ACTATACTTCTAATATCATTCATTACACTTT","TTAACTCCCATTATATATTATTAATTTACCC","CCAACATACTAAACTTATTTTTTAACTACCA","TTCTAAACATTACTCCTACACCTACATACCT","ATCATCAATTACCTAATAATTCCCAATTTAT","TCCCTAATCATACCATTTTACACTCAAAAAC","AATTCAAACTTTACACACCCCTCTCATCATC","CTCCATCTTATCATATAATAAACCAAATTTA","AAAAATCCATCATTTTTTAATTCCATTCCTT","CCACTCCAAACACAAAATTATTACAATAACA","ATATTTACTCACACAAACAATTACCATCACA","TTCAAATACAAATCTCAAAATCACCTTATTT","TCCTTTAACAACTTCCCTTATCTATCTATTC","CATCCATCCCAAAACTCTCACACATAACAAC","ATTACTTATACAAAATAACTACTCCCCAATA","TATATTTTAACCACTTACCAAAATCTCTACT","TCTTTTATATCCATAAATCCAACAACTCCTA","CTCTCAAACATATATTTCTATAACTCTTATC","ACAAATAATAAAACATCCATTTCATTCATAA","CACCACCAAACCTTATAATCCCCAACCACAC"];
        expect(script.getClosestString(strings)).to.be.equal("TTAACTCCCATTATATATTATTAATTTACCC");
    });
});
