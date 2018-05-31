var Data_BikeRental = [
    ['Marienplatz (Böblinger Straße)', 9.167691, 48.764182],
    ['Marienplatz (Zahnradbahn)', 9.168049, 48.764552],
    ['Berliner Platz / Fritz-Elsas-Straße', 9.16772, 48.777856],
    ['Berliner Platz / Breitscheidstraße', 9.167433, 48.779019],
    ['Universität Keplerstraße', 9.175373, 48.782442],
    ['Theodor-Heuss-Straße / Friedrichstraße', 9.175431, 48.778193],
    ['Berliner Platz / Breitscheidstraße', 9.167546, 48.779049],
    ['Theodor-Heuss-Straße / Büchsengasse', 9.173981, 48.777299],
    ['Theodor-Heuss-Straße / Friedrichstraße', 9.176651, 48.779434],
    ['Rotebühlplatz / Rotebühlstraße', 9.171926, 48.774808],
    ['Eberhardtstraße / Josef-Hirn-Platz', 9.177966, 48.773247],
    ['Leonhardsplatz / Hauptstätter Straße', 9.180635, 48.773728],
    ['Wilhelmsplatz / Schlosserstraße', 9.17864, 48.771171],
    ['Herdweg / Relenbergstraße', 9.162307, 48.786753],
    ['Schwabstraße / Wernlienstraße', 9.157501, 48.781744],
    ['Johannesstraße / Lerchenstraße', 9.159048, 48.780734],
    ['Hauptbahnhof Haupteingang', 9.181789, 48.78319],
    ['Königstraße / Schillerstraße', 9.181764, 48.782667],
    ['Lautenschlagerstraße / Zeppelin Carre', 9.179882, 48.782813],
    ['Neckartor / Neckarstraße', 9.190589, 48.78651],
    ['Feuersee Feuerseeplatz', 9.164132, 48.772563],
    ['Rathaus / Marktstraße', 9.179201, 48.7749],
    ['Bebelstraße / Bürgerzentrum West', 9.155379, 48.775173],
    ['Kleiner Schlossplatz / Kronprinzenstraße', 9.176502, 48.778026],
    ['Kleiner Schlossplatz / Theodor-Heuss-Straße', 9.17627, 48.778128],
    ['Johannesstraße / Schlossstraße', 9.162095, 48.776881],
    ['Landesbibliothek Urbanstraße', 9.185592, 48.776964],
    ['Konrad-Adenauer-Straße Haus der Geschichte', 9.185343, 48.778872],
    ['DB Bikes', 9.191216, 48.780055]
];
var BikeRentalEntities = [];
for (let i = 0; i < 29; i++) {
    var nameub = Data_BikeRental[i][0];
    var lonub = Data_BikeRental[i][1];
    var latub = Data_BikeRental[i][2];
    BikeRentalEntities[i] = viewer.entities.add({
        name: nameub,
        position: Cesium.Cartesian3.fromDegrees(lonub, latub),
        description: "Bike Rental : " + nameub,
        billboard: {
            image: pinBuilder.fromMakiIconId('bicycle', Cesium.Color.DARKSLATEGREY.withAlpha(0.85), 60),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
}