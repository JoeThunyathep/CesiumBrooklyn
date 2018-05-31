var sd1;
var sd1re;
var sd2;
var cova;
var corr;
var check1, check2;
var drawStat = function (insd1, insd2, unit1, unit2) {
    // sd1 = insd1;
    // sd2 = insd2;
    check1 = insd1;
    check2 = insd2;
    var insd1fix;
    var insd2fix;
    if (Object.size(insd2) < Object.size(insd1)) {
        insd1fix = insd2;
        insd2fix = insd1;
    } else {
        insd1fix = insd1;
        insd2fix = insd2;
    }

    
    setTimeout(function cb() {
            // sd1 = jStat.stdev(insd1);
            // sd2 = jStat.stdev(insd2);
            // cova = jStat.covariance(insd1,insd2);
            // corr = jStat.corrcoeff(insd1,insd2);
            document.getElementById('SD1val').innerHTML = jStat.stdev(insd1).toFixed(3) + " " + unit1;
            document.getElementById('SD2val').innerHTML = jStat.stdev(insd2).toFixed(3) + " " + unit2;
            document.getElementById('COV').innerHTML = jStat.covariance(insd1fix, insd2fix).toFixed(3);
            document.getElementById('CORR').innerHTML = jStat.corrcoeff(insd1fix, insd2fix).toFixed(3);
            document.getElementById('CORRs').innerHTML = jStat.spearmancoeff(insd1fix, insd2fix).toFixed(3);
            document.getElementById('max1val').innerHTML = jStat.max(insd1).toFixed(3);
            document.getElementById('max2val').innerHTML = jStat.max(insd2).toFixed(3);
            document.getElementById('min1val').innerHTML = jStat.min(insd1).toFixed(3);
            document.getElementById('min2val').innerHTML = jStat.min(insd2).toFixed(3);

    }, 500);

    //sd2 = jStat.stdev(insd2);
}
