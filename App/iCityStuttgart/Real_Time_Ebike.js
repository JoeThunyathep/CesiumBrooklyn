//setTimeout(function cb() { //Set timeout to ensure that the data has already received by STA
var ebike1, ebike2, ebike3, ebike4;
setTimeout(function cb() { //Set timeout to ensure that the data has already received by STA
    ebike1 = viewer.entities.add({
        name: 'Ebike1',
        position: Cesium.Cartesian3.fromDegrees(ebike1LatestLong, ebike1LatestLat),
        description: "Ebike1",
        billboard: {
            image: pinBuilder.fromText('1', Cesium.Color.ORANGE.withAlpha(0.7), 70).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
    ebike2 = viewer.entities.add({
        name: 'Ebike2',
        position: Cesium.Cartesian3.fromDegrees(ebike2LatestLong, ebike2LatestLat),
        description: "Ebike2",
        billboard: {
            image: pinBuilder.fromText('2', Cesium.Color.CRIMSON.withAlpha(0.7), 70).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
    ebike3 = viewer.entities.add({
        name: 'Ebike3',
        position: Cesium.Cartesian3.fromDegrees(ebike3LatestLong, ebike3LatestLat),
        description: "Ebike3",
        billboard: {
            image: pinBuilder.fromText('3', Cesium.Color.LIGHTSEAGREEN.withAlpha(0.7), 70).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
    ebike4 = viewer.entities.add({
        name: 'Ebike4',
        position: Cesium.Cartesian3.fromDegrees(ebike4LatestLong, ebike4LatestLat),
        description: "Ebike4",
        billboard: {
            image: pinBuilder.fromText('4', Cesium.Color.SEAGREEN.withAlpha(0.7), 70).toDataURL(),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });

}, 1000);

var ShowEbike = function () {
    ebikeRealtime.style.display = "block";
    ebike1.billboard.show = true;
    ebike2.billboard.show = true;
    ebike3.billboard.show = true;
    ebike4.billboard.show = true;
    //Info of realtime ebike 1
    document.getElementById('locaLatCuE1').innerHTML = ebike1LatestLat.toFixed(5) + ' \u00B0';
    document.getElementById('locaLongCuE1').innerHTML = ebike1LatestLong.toFixed(5) + ' \u00B0';
    document.getElementById('AltCuE1').innerHTML = ebike1LatestAlt.toFixed(5) + ' m';
    document.getElementById('AccCuE1').innerHTML = ebike1LatestAccuracy.toFixed(5) + ' m';
    document.getElementById('FuelCuE1').innerHTML = ebike1LatestFuel.toFixed(2) + ' %';
    document.getElementById('BatCuE1').innerHTML = ebike1LatestBat.toFixed(1) + ' mv';
    document.getElementById('LightCuE1').innerHTML = ebike1LatestLight;
    document.getElementById('ChargingCuE1').innerHTML = ebike1LatestCharging;
    document.getElementById('LatestUpE1').innerHTML = new Date(ebike1LatestResultTime.toString());
    //Info of realtime ebike 2
    document.getElementById('locaLatCuE2').innerHTML = ebike2LatestLat.toFixed(5) + ' \u00B0';
    document.getElementById('locaLongCuE2').innerHTML = ebike2LatestLong.toFixed(5) + ' \u00B0';
    //document.getElementById('AltCuE2').innerHTML = ebike2LatestAlt.toFixed(5) + ' m';
    document.getElementById('AltCuE2').innerHTML = '?';
    document.getElementById('AccCuE2').innerHTML = ebike2LatestAccuracy.toFixed(5) + ' m';
    document.getElementById('FuelCuE2').innerHTML = ebike2LatestFuel.toFixed(2) + ' %';
    document.getElementById('BatCuE2').innerHTML = ebike2LatestBat.toFixed(1) + ' mv';
    document.getElementById('LightCuE2').innerHTML = ebike2LatestLight;
    document.getElementById('ChargingCuE2').innerHTML = ebike2LatestCharging;
    document.getElementById('LatestUpE2').innerHTML = new Date(ebike2LatestResultTime.toString());
    //Info of realtime ebike 3
    document.getElementById('locaLatCuE3').innerHTML = ebike3LatestLat.toFixed(5) + ' \u00B0';
    document.getElementById('locaLongCuE3').innerHTML = ebike3LatestLong.toFixed(5) + ' \u00B0';
    document.getElementById('AltCuE3').innerHTML = ebike3LatestAlt.toFixed(5) + ' m';
    document.getElementById('AccCuE3').innerHTML = ebike3LatestAccuracy.toFixed(5) + ' m';
    document.getElementById('FuelCuE3').innerHTML = ebike3LatestFuel.toFixed(2) + ' %';
    document.getElementById('BatCuE3').innerHTML = ebike3LatestBat.toFixed(1) + ' mv';
    document.getElementById('LightCuE3').innerHTML = ebike3LatestLight;
    document.getElementById('ChargingCuE3').innerHTML = ebike3LatestCharging;
    document.getElementById('LatestUpE3').innerHTML = new Date(ebike3LatestResultTime.toString());
    //Info of realtime ebike 4
    document.getElementById('locaLatCuE4').innerHTML = ebike4LatestLat.toFixed(5) + ' \u00B0';
    document.getElementById('locaLongCuE4').innerHTML = ebike4LatestLong.toFixed(5) + ' \u00B0';
    document.getElementById('AltCuE4').innerHTML = ebike4LatestAlt.toFixed(5) + ' m';
    document.getElementById('AccCuE4').innerHTML = ebike4LatestAccuracy.toFixed(5) + ' m';
    document.getElementById('FuelCuE4').innerHTML = ebike4LatestFuel.toFixed(2) + ' %';
    document.getElementById('BatCuE4').innerHTML = ebike4LatestBat.toFixed(1) + ' mv';
    document.getElementById('LightCuE4').innerHTML = ebike4LatestLight;
    document.getElementById('ChargingCuE4').innerHTML = ebike4LatestCharging;
    document.getElementById('LatestUpE4').innerHTML = new Date(ebike4LatestResultTime.toString());
    //PublicTransEntity.show = true;
    //ebikeStationPin.position = Cesium.Cartesian3.fromDegrees(9.177917, 48.782957);
}

var ZoomToEbike = function() {
    var selectedEbike = ebikeSelection.options[ebikeSelection.selectedIndex].value;
    if (selectedEbike === 'ebikeSelection01') {
        viewer.flyTo(ebike1);
    } else if (selectedEbike === 'ebikeSelection02') {
        viewer.flyTo(ebike2);
    }else if (selectedEbike === 'ebikeSelection03') {
        viewer.flyTo(ebike3);
    }else if (selectedEbike === 'ebikeSelection04') {
        viewer.flyTo(ebike4);
    }
    
}
var HideEbike = function () {
    ebikeRealtime.style.display = "none";
    viewer.scene.camera.flyTo(homeCameraView);
    ebike1.billboard.show = false;
    ebike2.billboard.show = false;
    ebike3.billboard.show = false;
    ebike4.billboard.show = false;
    //PublicTransEntity.show = false;
    //ebikeStationPin.position = Cesium.Cartesian3.fromDegrees(9.177917, 48.782957);
}
var ShowRTInfo = function() {
    var selectedEbike = ebikeSelection.options[ebikeSelection.selectedIndex].value;
    if (selectedEbike === 'ebikeSelection01') {
        ebikeRT1.style.display = "block";
        ebikeRT2.style.display = "none";
        ebikeRT3.style.display = "none";
        ebikeRT4.style.display = "none";
    } else if (selectedEbike === 'ebikeSelection02') {
        ebikeRT2.style.display = "block";
        ebikeRT1.style.display = "none";
        ebikeRT3.style.display = "none";
        ebikeRT4.style.display = "none";
    } else if (selectedEbike === 'ebikeSelection03') {
        ebikeRT3.style.display = "block";
        ebikeRT1.style.display = "none";
        ebikeRT2.style.display = "none";
        ebikeRT4.style.display = "none";
    } else if (selectedEbike === 'ebikeSelection04') {
        ebikeRT4.style.display = "block";
        ebikeRT1.style.display = "none";
        ebikeRT3.style.display = "none";
        ebikeRT2.style.display = "none";
    }
}