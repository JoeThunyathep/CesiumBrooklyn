
var Data_SBahnStuttgart = [['Stuttgart-Muenster',9.2159294,	48.8207579],
['Stuttgart-Untertuerkheim',9.2504725, 48.7798209],
['Stuttgart Hauptbahnhof (tief)',9.1806801, 48.7838829],
['StadtMitte',9.174086, 48.777302],
['StadtMitte',9.171560, 48.775116],
['NordBahnhof',9.188152, 48.803690],
['Feueesee',9.166392, 48.772814],
['Korntal',9.1214162, 48.8265137],
['Stuttgart Hbf',9.1833959, 48.7856099],
['Stuttgart Schwabstrasse',9.1569698, 48.7702483],
['Stuttgart-Zuffenhausen',9.16721, 48.8295258],
['Stuttgart-Bad Cannstatt',9.2168515, 48.8014069],
['Stuttgart Neckarpark (Mercedes-Benz)',9.2411731, 48.7918161] ];

var SbahnEntities= [];


for (let i = 0; i < 9; i++) {
    var nameub = Data_SBahnStuttgart[i][0];
    var lonub = Data_SBahnStuttgart[i][1];
    var latub = Data_SBahnStuttgart[i][2];
    SbahnEntities[i] = viewer.entities.add({
        name: nameub,
        position: Cesium.Cartesian3.fromDegrees(lonub,latub),
        description: "S-Bahn Station: " + nameub,
        billboard: {
            image: pinBuilder.fromText('S', Cesium.Color.GREEN.withAlpha(0.9), 48).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
}

