//////////////////////////////////////////////////////////
//////////// Date Selector management ////////////////////
//////////////////////////////////////////////////////////
var monthSelectFrom, monthSelectTo;
$(document).ready(function () {
    //var Defdate = new Date('2017-11-22');

    $("#showChart").click(function () {
        //Give the Default Date    
    monthSelectFrom = MonthValueFrom.options[MonthValueFrom.selectedIndex].value;
    monthSelectTo = MonthValueTo.options[MonthValueTo.selectedIndex].value;
    var strFrom = "2016-" + monthSelectFrom+    "-01T00:00:00.000Z";
    var strTo = "2016-" + monthSelectTo+      "-01T00:00:00.000Z";
        drawC(strFrom, strTo);
        
    });
    $("#showValue").click(function () {
        StatInfo.style.display = "block";
    });
});
var DS_First;
var drawC = function (FromStr, ToStr,) {
    //var selectedFirstPara = FirstParameter.options[FirstParameter.selectedIndex].value;
    //var selectedSecondPara = SecondParameter.options[SecondParameter.selectedIndex].value;
    
    var DStag1 = "Heat_Demand_Measured";
    var DStag2 = "Heat_Demand_Computed";
    DS_First = GenSerieDataN(FromStr,ToStr, 1);
    var DS_Second = GenSerieDataN(FromStr,ToStr, 2);
    var unit1 = "";
    var unit2 = "";
    setTimeout(function cb() {
        drawChart('1', DS_First[0], DS_Second[0], DStag1, DStag2, unit1, unit2);
        //drawStat(DS_First[1], DS_Second[1], unit1, unit2);
        HightChartContainer.style.display = "block";
        document.getElementById('sd1nametag').innerHTML = DStag1;
        document.getElementById('sd2nametag').innerHTML = DStag2;
        document.getElementById('sd11nametag').innerHTML = DStag1;
        document.getElementById('sd22nametag').innerHTML = DStag2;
    }, 2000);
}


var RemoveStat = function () {
    HightChartContainer.style.display = "none";
}

var RemoveStatValue = function () {
    StatInfo.style.display = "none";
}