//STA

$.getJSON("http://localhost:8080/SensorThingsService/v1.0/Datastreams(<Datastreams id here>)/Observations", function (data) {
    // do something with the response "data"
});

//SOS
$.post("http://localhost:8080/52n-sos-webapp/service", {
    request: "GetResult",
    service: "SOS",
    version: "2.0.0",
    offering: "http://localhost:8080/52n-sos-webapp/offering<offering id here>",
    observedProperty: "http://localhost:8080/52n-sos-webapp/observedProperty<observedProperty id here>"
}, function (data) {
    // do something with the response "data"
}, "json");

//ASDDS
$.getJSON("http://localhost:8080/api/observation?sensorName=Test", function (data) {
    // do something with the response "data"
});