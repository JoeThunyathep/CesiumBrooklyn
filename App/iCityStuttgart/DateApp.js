//////////////////////////////////////////////////////////
//////////// Date Selector management ////////////////////
//////////////////////////////////////////////////////////
var TimeFromSelected, TimeToSelected, dateSelected, MinuteFromSelected, MinuteToSelected;
$(document).ready(function () {
    //var Defdate = new Date('2017-11-22');
    $("#dateSelector").datepicker({
        minDate: new Date(2017, 11 - 1, 22),
        maxDate: "+12D",
        changeMonth: true,
        changeYear: true,
        yearRange: '2017:2018',
    });
    $("#dateSelector").datepicker("option", "dateFormat", "yy-mm-dd");
    $("#dateSelector").datepicker("option", "showAnim", "slideDown");
    //$("#dateSelector").datepicker({ minDate: 0, maxDate: "+12D" });
    $("#dateSelector").datepicker().datepicker("setDate", new Date('2017-11-22'));
    //jquery for Time selector from ...
    $('#TimeFSelector').timepicker({
        timeFormat: 'H:mm:ss',
        interval: 10,
        minTime: '6',
        maxTime: '10:00pm',
        defaultTime: '13:00',
        startTime: '06:00',
        dynamic: true,
        dropdown: true
        //scrollbar: true
    });
    //jquery for Time selector to ...
    $('#TimeTSelector').timepicker({
        timeFormat: 'H:mm:ss',
        interval: 10,
        minTime: '6',
        maxTime: '10:00pm',
        defaultTime: '13:20',
        startTime: '06:00',
        dynamic: true,
        dropdown: true
        //scrollbar: true
    });
    $("#submitDate").click(function () {
        dateSelected = $("#dateSelector").val();
        TimeFromSelected =      $("#TimeFSelector").val().split(":")[0];
        MinuteFromSelected =    $("#TimeFSelector").val().split(":")[1];
        SecFromSelected =       $("#TimeFSelector").val().split(":")[2];
        TimeToSelected =        $("#TimeTSelector").val().split(":")[0];
        MinuteToSelected =      $("#TimeTSelector").val().split(":")[1];
        SecToSelected =         $("#TimeTSelector").val().split(":")[2];
        if (dateSelected === "") {
            alert("Please select date.");
        } else {
            var selectedYearStr = dateSelected.split("-")[0];
            var selectedMonthStr = dateSelected.split("-")[1];
            var selectedDateStr = dateSelected.split("-")[2];
            drawChartOftheDay(selectedYearStr, selectedDateStr, selectedMonthStr, TimeFromSelected, TimeToSelected, MinuteFromSelected, MinuteToSelected,SecFromSelected,SecToSelected);
        }
    });
    $("#showValue").click(function () {
        StatInfo.style.display = "block";
    });
});

var drawChartOftheDay = function (YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo,SFrom,STo) {
    var selectedEbikeStat = ebikeSelectionStatistic.options[ebikeSelectionStatistic.selectedIndex].value;
    var selectedFirstPara = FirstParameter.options[FirstParameter.selectedIndex].value;
    var selectedSecondPara = SecondParameter.options[SecondParameter.selectedIndex].value;
    if (selectedEbikeStat === "ebikeSelectionStat01") {
        if (selectedFirstPara === "TcuPF1") {
            var DSid_1 = "13";
            var DStag1 = 'TCU-PedalForce';
            var unit1 = "";
        } else if (selectedFirstPara === "TcuFL1") {
            var DSid_1 = "1";
            var DStag1 = 'TCU-FuelLevel';
            var unit1 = "%"
        } else if (selectedFirstPara === "TcuBV1") {
            var DSid_1 = "5";
            var DStag1 = 'TCU-BatteryVoltage';
            var unit1 = 'mv';
        } else if (selectedFirstPara === "TcuS1") {
            var DSid_1 = "17";
            var DStag1 = 'TCU-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "TcuA1") {
            var DSid_1 = "77";
            var DStag1 = 'TCU-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "GarminHR1") {
            var DSid_1 = "82";
            var DStag1 = 'Garmin-HeartRate';
            var unit1 = 'bpm';
        } else if (selectedFirstPara === "GarminS1") {
            var DSid_1 = "83";
            var DStag1 = 'Garmin-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "GarminBT1") {
            var DSid_1 = "84";
            var DStag1 = 'Garmin-BodyTemperatue';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "GarminA1") {
            var DSid_1 = "87";
            var DStag1 = 'Garmin-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "OWD1") {
            var DSid_1 = "96";
            var DStag1 = 'OWD-Temperature';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "OWDp1") {
            var DSid_1 = "89";
            var DStag1 = 'OWD-pressure';
            var unit1 = 'hPa';
        } else if (selectedFirstPara === "OWDh1") {
            var DSid_1 = "90";
            var DStag1 = 'OWD-humidity';
            var unit1 = '%';
        } else if (selectedFirstPara === "OWDws1") {
            var DSid_1 = "91";
            var DStag1 = 'OWD-WindSpeed';
            var unit1 = 'm/s';
        } else if (selectedFirstPara === "OWDwd1") {
            var DSid_1 = "92";
            var DStag1 = 'OWD-windDegree';
            var unit1 = '\u00B0';
        } else if (selectedFirstPara === "OWDc1") {
            var DSid_1 = "95";
            var DStag1 = 'OWD-Cloudiness';
            var unit1 = '%';
        }

        if (selectedSecondPara === "TcuPF2") {
            var DSid_2 = "13";
            var DStag2 = 'TCU-PedalForce';
            var unit2 = "";
        } else if (selectedSecondPara === "TcuFL2") {
            var DSid_2 = "1";
            var DStag2 = 'TCU-FuelLevel';
            var unit2 = "%"
        } else if (selectedSecondPara === "TcuBV2") {
            var DSid_2 = "5";
            var DStag2 = 'TCU-BatteryVoltage';
            var unit2 = 'mv';
        } else if (selectedSecondPara === "TcuS2") {
            var DSid_2 = "17";
            var DStag2 = 'TCU-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "TcuA2") {
            var DSid_2 = "77";
            var DStag2 = 'TCU-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "GarminHR2") {
            var DSid_2 = "82";
            var DStag2 = 'Garmin-HeartRate';
            var unit2 = 'bpm';
        } else if (selectedSecondPara === "GarminS2") {
            var DSid_2 = "83";
            var DStag2 = 'Garmin-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "GarminBT2") {
            var DSid_2 = "84";
            var DStag2 = 'Garmin-BodyTemperatue';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "GarminA2") {
            var DSid_2 = "87";
            var DStag2 = 'Garmin-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "OWD2") {
            var DSid_2 = "96";
            var DStag2 = 'OWD-Temperature';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "OWDp2") {
            var DSid_2 = "89";
            var DStag2 = 'OWD-pressure';
            var unit2 = 'hPa';
        } else if (selectedSecondPara === "OWDh2") {
            var DSid_2 = "90";
            var DStag2 = 'OWD-humidity';
            var unit2 = '%';
        } else if (selectedSecondPara === "OWDws2") {
            var DSid_2 = "91";
            var DStag2 = 'OWD-WindSpeed';
            var unit2 = 'm/s';
        } else if (selectedSecondPara === "OWDwd2") {
            var DSid_2 = "92";
            var DStag2 = 'OWD-windDegree';
            var unit2 = '\u00B0';
        } else if (selectedSecondPara === "OWDc2") {
            var DSid_2 = "95";
            var DStag2 = 'OWD-Cloudiness';
            var unit2 = '%';
        }

        //DS_First = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_1);
        var DS_First = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo, SFrom,STo,DSid_1);
        //DS_Second = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_2);
        var DS_Second = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo,SFrom,STo, DSid_2);
        setTimeout(function cb() {
            drawChart('1', DS_First[0], DS_Second[0], DStag1, DStag2, unit1, unit2);
            drawStat(DS_First[1], DS_Second[1], unit1, unit2);
            HightChartContainer.style.display = "block";
            document.getElementById('sd1nametag').innerHTML= DStag1;
            document.getElementById('sd2nametag').innerHTML= DStag2;
            document.getElementById('sd11nametag').innerHTML= DStag1;
            document.getElementById('sd22nametag').innerHTML= DStag2;
        }, 500);
    } else if (selectedEbikeStat === "ebikeSelectionStat02") {
        if (selectedFirstPara === "TcuPF1") {
            var DSid_1 = "14";
            var DStag1 = 'TCU-PedalForce';
            var unit1 = "";
        } else if (selectedFirstPara === "TcuFL1") {
            var DSid_1 = "2";
            var DStag1 = 'TCU-FuelLevel';
            var unit1 = "%"
        } else if (selectedFirstPara === "TcuBV1") {
            var DSid_1 = "6";
            var DStag1 = 'TCU-BatteryVoltage';
            var unit1 = 'mv';
        } else if (selectedFirstPara === "TcuS1") {
            var DSid_1 = "18";
            var DStag1 = 'TCU-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "TcuA1") {
            var DSid_1 = "78";
            var DStag1 = 'TCU-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "GarminHR1") {
            var DSid_1 = "82";
            var DStag1 = 'Garmin-HeartRate';
            var unit1 = 'bpm';
        } else if (selectedFirstPara === "GarminS1") {
            var DSid_1 = "83";
            var DStag1 = 'Garmin-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "GarminBT1") {
            var DSid_1 = "84";
            var DStag1 = 'Garmin-BodyTemperatue';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "GarminA1") {
            var DSid_1 = "87";
            var DStag1 = 'Garmin-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "OWD1") {
            var DSid_1 = "96";
            var DStag1 = 'OWD-Temperature';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "OWDp1") {
            var DSid_1 = "89";
            var DStag1 = 'OWD-pressure';
            var unit1 = 'hPa';
        } else if (selectedFirstPara === "OWDh1") {
            var DSid_1 = "90";
            var DStag1 = 'OWD-humidity';
            var unit1 = '%';
        } else if (selectedFirstPara === "OWDws1") {
            var DSid_1 = "91";
            var DStag1 = 'OWD-WindSpeed';
            var unit1 = 'm/s';
        } else if (selectedFirstPara === "OWDwd1") {
            var DSid_1 = "92";
            var DStag1 = 'OWD-windDegree';
            var unit1 = '\u00B0';
        } else if (selectedFirstPara === "OWDc1") {
            var DSid_1 = "95";
            var DStag1 = 'OWD-Cloudiness';
            var unit1 = '%';
        }

        if (selectedSecondPara === "TcuPF2") {
            var DSid_2 = "14";
            var DStag2 = 'TCU-PedalForce';
            var unit2 = "";
        } else if (selectedSecondPara === "TcuFL2") {
            var DSid_2 = "2";
            var DStag2 = 'TCU-FuelLevel';
            var unit2 = "%"
        } else if (selectedSecondPara === "TcuBV2") {
            var DSid_2 = "6";
            var DStag2 = 'TCU-BatteryVoltage';
            var unit2 = 'mv';
        } else if (selectedSecondPara === "TcuS2") {
            var DSid_2 = "18";
            var DStag2 = 'TCU-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "TcuA2") {
            var DSid_2 = "78";
            var DStag2 = 'TCU-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "GarminHR2") {
            var DSid_2 = "82";
            var DStag2 = 'Garmin-HeartRate';
            var unit2 = 'bpm';
        } else if (selectedSecondPara === "GarminS2") {
            var DSid_2 = "83";
            var DStag2 = 'Garmin-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "GarminBT2") {
            var DSid_2 = "84";
            var DStag2 = 'Garmin-BodyTemperatue';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "GarminA2") {
            var DSid_2 = "87";
            var DStag2 = 'Garmin-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "OWD2") {
            var DSid_2 = "96";
            var DStag2 = 'OWD-Temperature';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "OWDp2") {
            var DSid_2 = "89";
            var DStag2 = 'OWD-pressure';
            var unit2 = 'hPa';
        } else if (selectedSecondPara === "OWDh2") {
            var DSid_2 = "90";
            var DStag2 = 'OWD-humidity';
            var unit2 = '%';
        } else if (selectedSecondPara === "OWDws2") {
            var DSid_2 = "91";
            var DStag2 = 'OWD-WindSpeed';
            var unit2 = 'm/s';
        } else if (selectedSecondPara === "OWDwd2") {
            var DSid_2 = "92";
            var DStag2 = 'OWD-windDegree';
            var unit2 = '\u00B0';
        } else if (selectedSecondPara === "OWDc2") {
            var DSid_2 = "95";
            var DStag2 = 'OWD-Cloudiness';
            var unit2 = '%';
        }

        //DS_First = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_1);
        var DS_First = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo,SFrom,STo, DSid_1);
        //DS_Second = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_2);
        var DS_Second = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo, SFrom,STo,DSid_2);
        setTimeout(function cb() {
            drawChart('2', DS_First[0], DS_Second[0], DStag1, DStag2, unit1, unit2);
            drawStat(DS_First[1], DS_Second[1], unit1, unit2);
            HightChartContainer.style.display = "block";
            document.getElementById('sd1nametag').innerHTML= DStag1;
            document.getElementById('sd2nametag').innerHTML= DStag2;
            document.getElementById('sd11nametag').innerHTML= DStag1;
            document.getElementById('sd22nametag').innerHTML= DStag2;
        }, 500);

    } else if (selectedEbikeStat === "ebikeSelectionStat03") {
        if (selectedFirstPara === "TcuPF1") {
            var DSid_1 = "15";
            var DStag1 = 'TCU-PedalForce';
            var unit1 = "";
        } else if (selectedFirstPara === "TcuFL1") {
            var DSid_1 = "3";
            var DStag1 = 'TCU-FuelLevel';
            var unit1 = "%"
        } else if (selectedFirstPara === "TcuBV1") {
            var DSid_1 = "7";
            var DStag1 = 'TCU-BatteryVoltage';
            var unit1 = 'mv';
        } else if (selectedFirstPara === "TcuS1") {
            var DSid_1 = "19";
            var DStag1 = 'TCU-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "TcuA1") {
            var DSid_1 = "79";
            var DStag1 = 'TCU-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "GarminHR1") {
            var DSid_1 = "82";
            var DStag1 = 'Garmin-HeartRate';
            var unit1 = 'bpm';
        } else if (selectedFirstPara === "GarminS1") {
            var DSid_1 = "83";
            var DStag1 = 'Garmin-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "GarminBT1") {
            var DSid_1 = "84";
            var DStag1 = 'Garmin-BodyTemperatue';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "GarminA1") {
            var DSid_1 = "87";
            var DStag1 = 'Garmin-Altitude';
            var unit1 = 'm';
        }else if (selectedFirstPara === "OWD1") {
            var DSid_1 = "96";
            var DStag1 = 'OWD-Temperature';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "OWDp1") {
            var DSid_1 = "89";
            var DStag1 = 'OWD-pressure';
            var unit1 = 'hPa';
        } else if (selectedFirstPara === "OWDh1") {
            var DSid_1 = "90";
            var DStag1 = 'OWD-humidity';
            var unit1 = '%';
        } else if (selectedFirstPara === "OWDws1") {
            var DSid_1 = "91";
            var DStag1 = 'OWD-WindSpeed';
            var unit1 = 'm/s';
        } else if (selectedFirstPara === "OWDwd1") {
            var DSid_1 = "92";
            var DStag1 = 'OWD-windDegree';
            var unit1 = '\u00B0';
        } else if (selectedFirstPara === "OWDc1") {
            var DSid_1 = "95";
            var DStag1 = 'OWD-Cloudiness';
            var unit1 = '%';
        }

        if (selectedSecondPara === "TcuPF2") {
            var DSid_2 = "15";
            var DStag2 = 'TCU-PedalForce';
            var unit2 = "";
        } else if (selectedSecondPara === "TcuFL2") {
            var DSid_2 = "3";
            var DStag2 = 'TCU-FuelLevel';
            var unit2 = "%"
        } else if (selectedSecondPara === "TcuBV2") {
            var DSid_2 = "7";
            var DStag2 = 'TCU-BatteryVoltage';
            var unit2 = 'mv';
        } else if (selectedSecondPara === "TcuS2") {
            var DSid_2 = "19";
            var DStag2 = 'TCU-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "TcuA2") {
            var DSid_2 = "79";
            var DStag2 = 'TCU-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "GarminHR2") {
            var DSid_2 = "82";
            var DStag2 = 'Garmin-HeartRate';
            var unit2 = 'bpm';
        } else if (selectedSecondPara === "GarminS2") {
            var DSid_2 = "83";
            var DStag2 = 'Garmin-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "GarminBT2") {
            var DSid_2 = "84";
            var DStag2 = 'Garmin-BodyTemperatue';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "GarminA2") {
            var DSid_2 = "87";
            var DStag2 = 'Garmin-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "OWD2") {
            var DSid_2 = "96";
            var DStag2 = 'OWD-Temperature';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "OWDp2") {
            var DSid_2 = "89";
            var DStag2 = 'OWD-pressure';
            var unit2 = 'hPa';
        } else if (selectedSecondPara === "OWDh2") {
            var DSid_2 = "90";
            var DStag2 = 'OWD-humidity';
            var unit2 = '%';
        } else if (selectedSecondPara === "OWDws2") {
            var DSid_2 = "91";
            var DStag2 = 'OWD-WindSpeed';
            var unit2 = 'm/s';
        } else if (selectedSecondPara === "OWDwd2") {
            var DSid_2 = "92";
            var DStag2 = 'OWD-windDegree';
            var unit2 = '\u00B0';
        } else if (selectedSecondPara === "OWDc2") {
            var DSid_2 = "95";
            var DStag2 = 'OWD-Cloudiness';
            var unit2 = '%';
        }

        //DS_First = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_1);
        var DS_First = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo, SFrom,STo,DSid_1);
        //DS_Second = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_2);
        var DS_Second = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo, SFrom,STo,DSid_2);
        setTimeout(function cb() {
            drawChart('3', DS_First[0], DS_Second[0], DStag1, DStag2, unit1, unit2);
            drawStat(DS_First[1], DS_Second[1], unit1, unit2);
            HightChartContainer.style.display = "block";
            document.getElementById('sd1nametag').innerHTML= DStag1;
            document.getElementById('sd2nametag').innerHTML= DStag2;
            document.getElementById('sd11nametag').innerHTML= DStag1;
            document.getElementById('sd22nametag').innerHTML= DStag2;
        }, 500);

    } else if (selectedEbikeStat === "ebikeSelectionStat04") {
        if (selectedFirstPara === "TcuPF1") {
            var DSid_1 = "16";
            var DStag1 = 'TCU-PedalForce';
            var unit1 = "";
        } else if (selectedFirstPara === "TcuFL1") {
            var DSid_1 = "4";
            var DStag1 = 'TCU-FuelLevel';
            var unit1 = "%"
        } else if (selectedFirstPara === "TcuBV1") {
            var DSid_1 = "8";
            var DStag1 = 'TCU-BatteryVoltage';
            var unit1 = 'mv';
        } else if (selectedFirstPara === "TcuS1") {
            var DSid_1 = "30";
            var DStag1 = 'TCU-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "TcuA1") {
            var DSid_1 = "80";
            var DStag1 = 'TCU-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "GarminHR1") {
            var DSid_1 = "82";
            var DStag1 = 'Garmin-HeartRate';
            var unit1 = 'bpm';
        } else if (selectedFirstPara === "GarminS1") {
            var DSid_1 = "83";
            var DStag1 = 'Garmin-Speed';
            var unit1 = 'km/h';
        } else if (selectedFirstPara === "GarminBT1") {
            var DSid_1 = "84";
            var DStag1 = 'Garmin-BodyTemperatue';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "GarminA1") {
            var DSid_1 = "87";
            var DStag1 = 'Garmin-Altitude';
            var unit1 = 'm';
        } else if (selectedFirstPara === "OWD1") {
            var DSid_1 = "96";
            var DStag1 = 'OWD-Temperature';
            var unit1 = '\u00B0 C';
        } else if (selectedFirstPara === "OWDp1") {
            var DSid_1 = "89";
            var DStag1 = 'OWD-pressure';
            var unit1 = 'hPa';
        } else if (selectedFirstPara === "OWDh1") {
            var DSid_1 = "90";
            var DStag1 = 'OWD-humidity';
            var unit1 = '%';
        } else if (selectedFirstPara === "OWDws1") {
            var DSid_1 = "91";
            var DStag1 = 'OWD-WindSpeed';
            var unit1 = 'm/s';
        } else if (selectedFirstPara === "OWDwd1") {
            var DSid_1 = "92";
            var DStag1 = 'OWD-windDegree';
            var unit1 = '\u00B0';
        } else if (selectedFirstPara === "OWDc1") {
            var DSid_1 = "95";
            var DStag1 = 'OWD-Cloudiness';
            var unit1 = '%';
        }

        if (selectedSecondPara === "TcuPF2") {
            var DSid_2 = "16";
            var DStag2 = 'TCU-PedalForce';
            var unit2 = "";
        } else if (selectedSecondPara === "TcuFL2") {
            var DSid_2 = "4";
            var DStag2 = 'TCU-FuelLevel';
            var unit2 = "%"
        } else if (selectedSecondPara === "TcuBV2") {
            var DSid_2 = "8";
            var DStag2 = 'TCU-BatteryVoltage';
            var unit2 = 'mv';
        } else if (selectedSecondPara === "TcuS2") {
            var DSid_2 = "20";
            var DStag2 = 'TCU-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "TcuA2") {
            var DSid_2 = "80";
            var DStag2 = 'TCU-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "GarminHR2") {
            var DSid_2 = "82";
            var DStag2 = 'Garmin-HeartRate';
            var unit2 = 'bpm';
        } else if (selectedSecondPara === "GarminS2") {
            var DSid_2 = "83";
            var DStag2 = 'Garmin-Speed';
            var unit2 = 'km/h';
        } else if (selectedSecondPara === "GarminBT2") {
            var DSid_2 = "84";
            var DStag2 = 'Garmin-BodyTemperatue';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "GarminA2") {
            var DSid_2 = "87";
            var DStag2 = 'Garmin-Altitude';
            var unit2 = 'm';
        } else if (selectedSecondPara === "OWD2") {
            var DSid_2 = "96";
            var DStag2 = 'OWD-Temperature';
            var unit2 = '\u00B0 C';
        } else if (selectedSecondPara === "OWDp2") {
            var DSid_2 = "89";
            var DStag2 = 'OWD-pressure';
            var unit2 = 'hPa';
        } else if (selectedSecondPara === "OWDh2") {
            var DSid_2 = "90";
            var DStag2 = 'OWD-humidity';
            var unit2 = '%';
        } else if (selectedSecondPara === "OWDws2") {
            var DSid_2 = "91";
            var DStag2 = 'OWD-WindSpeed';
            var unit2 = 'm/s';
        } else if (selectedSecondPara === "OWDwd2") {
            var DSid_2 = "92";
            var DStag2 = 'OWD-windDegree';
            var unit2 = '\u00B0';
        } else if (selectedSecondPara === "OWDc2") {
            var DSid_2 = "95";
            var DStag2 = 'OWD-Cloudiness';
            var unit2 = '%';
        }

        //DS_First = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_1);
        var DS_First = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo,SFrom,STo, DSid_1);
        //DS_Second = GenSerieDataWTime(DateSt, MonthSt, FromStr, ToStr, DSid_2);
        var DS_Second = GenSerieDataWTimeMin(YearSt, DateSt, MonthSt, FromStr, ToStr, MFrom, MTo,SFrom,STo, DSid_2);
        setTimeout(function cb() {
            drawChart('4',  DS_First[0], DS_Second[0], DStag1, DStag2, unit1, unit2);
            drawStat(DS_First[1], DS_Second[1], unit1, unit2);
            HightChartContainer.style.display = "block";
            document.getElementById('sd1nametag').innerHTML= DStag1;
            document.getElementById('sd2nametag').innerHTML= DStag2;
            document.getElementById('sd11nametag').innerHTML= DStag1;
            document.getElementById('sd22nametag').innerHTML= DStag2;
        }, 500);

    } else {
        alert('Please Select Ebike!');
    }

}


var RemoveStat = function () {
    HightChartContainer.style.display = "none";
}


var RemoveStatValue = function () {
    StatInfo.style.display = "none";
}