var Data_StadtCarStuttgart = [
    ['Stadtmobil carsharing AG', 9.15993, 48.770142],
    ['stadtmobil carsharing AG', 9.156669, 48.771128],
    ['stadtmobil carsharing AG', 9.168436, 48.77364],
    ['stadtmobil carsharing AG', 9.158847, 48.768964],
    ['stadtmobil carsharing AG', 9.15609, 48.769115],
    ['stadtmobil carsharing AG', 9.17804, 48.781865],
    ['stadtmobil carsharing AG', 9.15609, 48.769115],
    ['stadtmobil carsharing AG', 9.153463, 48.77354]
];
var StadtCarSEntities = [];
for (let i = 0; i < 6; i++) {
    var nameuba = Data_StadtCarStuttgart[i][0];
    var lonuba = Data_StadtCarStuttgart[i][1];
    var latuba = Data_StadtCarStuttgart[i][2];
    StadtCarSEntities[i] = viewer.entities.add({
        name: nameuba,
        position: Cesium.Cartesian3.fromDegrees(lonuba, latuba),
        description: "Car Sharing : " + nameuba,
        billboard: {
            image: pinBuilder.fromMakiIconId('car', Cesium.Color.RED.withAlpha(0.7), 60),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
}