
//latitude
//http://localhost:8080/SensorThingsService/v1.0/Datastreams(72)/Observations?$orderby=resultTime%20desc&$top=1
//longitude
//http://localhost:8080/SensorThingsService/v1.0/Datastreams(76)/Observations?$orderby=resultTime%20desc&$top=1
//altitude
//http://localhost:8080/SensorThingsService/v1.0/Datastreams(80)/Observations?$orderby=resultTime%20desc&$top=1
//
//http://localhost:8080/SensorThingsService/v1.0/Datastreams(4)/Observations?$orderby=resultTime%20desc&$top=1&$filter=day(resultTime) eq 22 and month(resultTime) eq 11 and hour(resultTime) ge 13 and hour(resultTime) le 16&$select=result,resultTime
var ebike1LatestLat,ebike1LatestLong,ebike1LatestAlt,ebike1LatestAccuracy, ebike1LatestFuel, ebike1LatestBat;
var ebike1LatestLight, ebike1LatestCharging , ebike1LatestResultTime;
var ebike2LatestLat,ebike2LatestLong,ebike2LatestAlt,ebike2LatestAccuracy, ebike2LatestFuel, ebike2LatestBat;
var ebike2LatestLight, ebike2LatestCharging, ebike2LatestResultTime;
var ebike3LatestLat,ebike3LatestLong,ebike3LatestAlt,ebike3LatestAccuracy, ebike3LatestFuel, ebike3LatestBat;
var ebike3LatestLight, ebike3LatestCharging, ebike3LatestResultTime;
var ebike4LatestLat,ebike4LatestLong,ebike4LatestAlt,ebike4LatestAccuracy, ebike4LatestFuel, ebike4LatestBat;
var ebike4LatestLight, ebike4LatestCharging, ebike4LatestResultTime;
var FromFi, ToFi,FullRequestText1;
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////get Latest Info of ebike 1////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(1)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestFuel = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(5)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestBat = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(21)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestLight = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(25)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestCharging = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(65)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestAccuracy = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(69)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike1LatestLat = data.value[0].result;
ebike1LatestResultTime = data.value[0].resultTime;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(73)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
ebike1LatestLong = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(77)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
ebike1LatestAlt = data.value[0].result;
});
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////get Latest Info of ebike 2////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(2)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestFuel = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(6)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestBat = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(22)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestLight = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(26)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestCharging = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(66)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestAccuracy = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(70)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike2LatestLat = data.value[0].result;
ebike2LatestResultTime = data.value[0].resultTime;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(74)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
ebike2LatestLong = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(78)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
ebike2LatestAlt = data.value[0].result;
});
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////get Latest Info of ebike 3////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(3)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestFuel = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(7)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestBat = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(23)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestLight = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(27)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestCharging = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(67)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestAccuracy = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(71)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike3LatestLat = data.value[0].result;
ebike3LatestResultTime = data.value[0].resultTime;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(75)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
    ebike3LatestLong = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(79)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
    ebike3LatestAlt = data.value[0].result;
});
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////get Latest Info of ebike 4////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(4)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestFuel = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(8)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestBat = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(24)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestLight = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(28)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestCharging = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(68)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestAccuracy = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(72)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
//console.log(data.value[0].result);
ebike4LatestLat = data.value[0].result;
ebike4LatestResultTime = data.value[0].resultTime;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(76)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
    ebike4LatestLong = data.value[0].result;
});
$.getJSON( "http://localhost:8080/SensorThingsService/v1.0/Datastreams(80)/Observations?$orderby=resultTime%20desc&$top=1", function( data ) {
    ebike4LatestAlt = data.value[0].result;
});

// Uncommnet this part just for check the request response
// setTimeout(function cb() {
// console.log('lat,long,alt ' + ebike1LatestLat + '/'+ebike1LatestLong+ '/' +ebike1LatestAlt);
// console.log('lat,long,alt ' + ebike2LatestLat + '/'+ebike2LatestLong+ '/' +ebike2LatestAlt);
// console.log('lat,long,alt ' + ebike3LatestLat + '/'+ebike3LatestLong+ '/' +ebike3LatestAlt);
// console.log('lat,long,alt ' + ebike4LatestLat + '/'+ebike4LatestLong+ '/' +ebike4LatestAlt);
// }, 1000);


// fuction to check size of the array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
//get Fuel Level Chart for 22/11/2017
var Base = "http://localhost:8080/SensorThingsService/v1.0/Datastreams(";

//http://localhost:8080/SensorThingsService/v1.0/Datastreams(4)/Observations?$orderby=resultTime&$filter=resultTime%20ge%202017-11-22T09:00:00.000Z%20and%20resultTime%20le%202017-11-24T09:03:58.000Z

var datasize;
var GenSerieData = function (day, month, DatastreamsID) {
    var text = ")/Observations?$orderby=resultTime&$filter=day(resultTime)%20eq%20" + day + "%20and%20month(resultTime)%20eq%20"+month+"&$select=result,resultTime"
    var FullRequestText = Base + DatastreamsID + text
    var resultJs = getJSONRequestSTA(FullRequestText);
    return resultJs;
}
// To Check Here
var GenSerieDataWTime = function (day, month, FromHR, ToHR, DatastreamsID) {
    var FromH = parseFloat(FromHR) + 1;
    var FromStr = FromH.toString();
    var ToH = parseFloat(ToHR) + 1;
    var ToStr = ToH.toString();
    var text = ")/Observations?$orderby=resultTime&$filter=day(resultTime)%20eq%20" + day + "%20and%20month(resultTime)%20eq%20"+month+ "%20and%20hour(resultTime)%20ge%20"+FromStr + "%20and%20hour(resultTime)%20le%20"+ToStr +"&$select=result,resultTime"
    var FullRequestText = Base + DatastreamsID + text
    var resultJs = getJSONRequestSTA(FullRequestText);
    return resultJs;
}

var resultJs, checkIOTnext;
var GenSerieDataWTimeMin = function (year, day, month, FromHR, ToHR, FromMin, ToMin, SFrom,STo, DatastreamsID) {
    // var FromH = parseFloat(FromHR) + 1;
    // var FromStr = FromH.toString();
    // var ToH = parseFloat(ToHR) + 1;
    // var ToStr = ToH.toString();
    FromFi = new Date(year, month-1, day, parseFloat(FromHR) + 1, FromMin, SFrom).toISOString();
    ToFi = new Date(year, month-1, day, parseFloat(ToHR) + 1, ToMin, STo).toISOString();
    var text = ")/Observations?$orderby=resultTime&$filter=resultTime%20ge%20" + FromFi + "%20and%20resultTime%20le%20"+ToFi+"&$select=result,resultTime"
    FullRequestText1 = Base + DatastreamsID + text
    resultJs = getJSONRequestSTA(FullRequestText1);
    return resultJs;
}
var stdx;

var getJSONRequestSTA = function (FullRequestText){
    var resultJson= [];
    var std = [];
    var matrix = [];
    $.getJSON(FullRequestText, function( data ) {
            datasize = Object.size(data.value);
            for (let i = 0; i < datasize /*size of the jsonBody*/; i++) {
                var temp = [Date.parse(data.value[i].resultTime), Math.round(parseFloat(data.value[i].result)* 100) / 100];
                resultJson.push(temp); //input the resultTime in Unix
                matrix.push(temp[1]);
            }
            //uncomment to read IOT next link
            // if (data['@iot.nextLink']) {
            //     checkIOTnext = true;
            //     $.getJSON(data['@iot.nextLink'], function( data1 ) {
            //         var datasize1 = Object.size(data1.value);
            //         for (let i = 0; i < datasize1 /*size of the jsonBody*/; i++) {
            //             var temp1 = [Date.parse(data.value[i].resultTime), parseFloat(data.value[i].result)];
            //             resultJson.push(temp1); //input the resultTime in Unix
            //             matrix.push(temp1[1]);
            //         }
            //     });
            // }

    });
    return [resultJson,matrix]
}

//To add = nextLink (Right now set max return at full body)
//var ebike2Fuel_221117 = GenSerieData("22","11","2");
//var ebike4Fuel_221117 = GenSerieData("22","11","4");
//var ebike2PedalForce_221117 = GenSerieData("22","11","14");
//var ebike4PedalForce_221117 = GenSerieData("22","11","16");
//var testRequest = GenSerieDataWTime("22","11","14","16","2");
