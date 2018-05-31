

var FromFi, ToFi,FullRequestText1;

// fuction to check size of the array
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
//get Fuel Level Chart for 22/11/2017
var Base = "http://localhost:8080/STA_Test_Rossani/v1.0/Datastreams(";

//http://localhost:8080/SensorThingsService/v1.0/Datastreams(4)/Observations?$orderby=resultTime&$filter=resultTime%20ge%202017-11-22T09:00:00.000Z%20and%20resultTime%20le%202017-11-24T09:03:58.000Z

var datasize;
var GenSerieDataN = function (isoFr, isoTo, DS) {
    var text = ")/Observations?$orderby=resultTime&$filter=resultTime%20ge%20" + isoFr + "%20and%20resultTime%20le%20" + isoTo + "&$select=result,resultTime"
    var FullRequestText = Base + DS + text;
    var DS_Thing_Request = Base + DS + ")/Thing";
    var resultJs = getJSONRequestSTA(FullRequestText,DS_Thing_Request);
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
    });
    return [resultJson,matrix]
}

