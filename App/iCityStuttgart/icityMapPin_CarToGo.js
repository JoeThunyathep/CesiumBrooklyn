var Data_Car2GoBStuttgart = [
    ['car2go black parkspot', 9.1728356, 48.779783899],
    ['car2go black parkspot', 9.1799643, 48.7824645]
];
var C2GbEntities = [];
for (let i = 0; i < 2; i++) {
    var nameub = Data_Car2GoBStuttgart[i][0];
    var lonub = Data_Car2GoBStuttgart[i][1];
    var latub = Data_Car2GoBStuttgart[i][2];
    C2GbEntities[i] = viewer.entities.add({
        name: nameub,
        position: Cesium.Cartesian3.fromDegrees(lonub, latub),
        description: "Car Sharing : " + nameub,
        billboard: {
            image: pinBuilder.fromMakiIconId('car', Cesium.Color.AQUA.withAlpha(0.7), 60),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
}