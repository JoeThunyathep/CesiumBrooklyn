//To do! Program Match 2 graph!!!
// implement simple statistic .js??
// set unit!!
var drawChart = function (ebikeID, DS_1, DS_2, dataTag1, dataTag2, unit1, unit2) {
    //setTimeout(function cb() {
    //var nameTag = 'E-bike ' + ebikeID;
    var nameTag = '';
    Highcharts.chart('HightChartContainer', {
        chart: {
            zoomType: 'x'
        }, title: {
            text: 'Ebike Usage Statistic'
        },
        subtitle: {
            text: '[' + dataTag1 + ' and ' + dataTag2 + ']'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year    
                minute: '%H:%M',
                hour: '%H:%M'
            },
            title: {
                text: 'Time'
            }
        },
        yAxis: [{
            title: {
                text: dataTag1
            },
            labels: {
                format: '{value} ' + unit1
            }
        },
        {
            title: {
                text: dataTag2
            },
            opposite: true,
            labels: {
                format: '{value} ' + unit2
            }
        }],
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.y:.2f} ' + ' at {point.x:%H:%M:%S.%L}',
            crosshairs: true,
            shared: true
            //valueSuffix: ' {series.su}'
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true,
                    radius: 2
                },
                series: {
                    lineWidth: 1
                }
            }
        },

        series: [{
            name: nameTag + dataTag1,
            yAxis: 0,
            type: 'spline',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: DS_1
        }, {
            name: nameTag + dataTag2,
            yAxis: 1,
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: DS_2,
            type: 'spline'
        }
            // ,
            // {
            //     name: 'E-Bike4 Fuel-level',
            //     // Define the data points. All series have a dummy year
            //     // of 1970/71 in order to be compared on the same x axis. Note
            //     // that in JavaScript, months start at 0 for January, 1 for February etc.
            //     data: ebike4Fuel_221117
            // }
        ]


    });
    //}, 2000);
}
