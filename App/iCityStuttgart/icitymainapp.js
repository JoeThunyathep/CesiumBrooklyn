Cesium.BingMapsApi.defaultKey = 'ApOW9LMkerqWIVSnFauilSeaZyp8df66byy1USCTjgTdMvhb4y1iAhEsUHQfCgzq'

var Show2D = false; // Turn to true if want to display without terrain
var Show3D;
if (Show2D) {
    Show3D = false;
    var viewer = new Cesium.Viewer('cesiumContainer', {
        baseLayerPicker: false,
        //scene3DOnly: true
    });
} else {
    Show3D = true;
    var viewer = new Cesium.Viewer('cesiumContainer', {
        baseLayerPicker: true,
        //scene3DOnly: true,
        //terrainExaggeration: 1.5,
        navigationHelpButton: false,
        selectionIndicator: false,
        shadows: true        
    });
    viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
        url: 'https://assets.agi.com/stk-terrain/world',
        requestWaterMask: true, // required for water effects
        requestVertexNormals: false // required for terrain lighting
    });

    
}
// Basic Set Up for the Cesium Globe
viewer.scene.globe.enableLighting = true;
// Basic Set Up for view
var initialPosition = new Cesium.Cartesian3.fromDegrees(9.1720, 48.7630, 1631.082799425431);
// Initial Position of Patricks
//var initialPosition = new Cesium.Cartesian3.fromDegrees(9.1812468, 48.7785923, 1631.082799425431);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
var homeCameraView = {
    destination: initialPosition,
    orientation: {
        heading: initialOrientation.heading,
        pitch: initialOrientation.pitch,
        roll: initialOrientation.roll
    }
};
// Add some camera flight animation options
homeCameraView.duration = 2.0;
homeCameraView.maximumHeight = 2000;
homeCameraView.pitchAdjustHeight = 2000;
homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
// Override the default home button
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
    e.cancel = true;
    viewer.scene.camera.flyTo(homeCameraView);
});
viewer.scene.camera.setView(homeCameraView);
// Set up clock and timeline.
viewer.clock.shouldAnimate = true; // default
viewer.clock.startTime = Cesium.JulianDate.fromIso8601("2017-11-22T13:04:49Z");
viewer.clock.stopTime = Cesium.JulianDate.fromIso8601("2017-11-22T15:00:00Z");
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2017-11-22T13:04:49Z");
viewer.clock.multiplier = 0; // sets a speedup
//viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER; // tick computation mode
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // loop at the end
viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime); // set visible range

// A Function to turn off terrain
var DestroyView = function () {
    viewer.destroy();
};
////////////////////////////////////////
//Add 3D City DB function to load glTF//
////////////////////////////////////////
var observable = Cesium.knockout.getObservable(viewer, '_selectedEntity');
observable.subscribe(function (entity) {
    if (!Cesium.defined(entity)) {
        var layers = webMap._layers;
        for (var i = 0; i < layers.length; i++) {
            if (layers[i].active) {
                layers[i].unHighlightAllObjects();
            }
        }
    }
});
var webMap = new WebMap3DCityDB(viewer);
webMap.activateViewChangedEvent(true);
webMap.activateMouseMoveEvents(true);
webMap.activateMouseClickEvents(true);
var mouseOverhighlightColor = new Cesium.Color(0.0, 0.3, 0.0, 1.0);
var mouseClickhighlightColor = new Cesium.Color(0.4, 0.4, 0.0, 1.0);
var CheckWebMap = 0;
var dataLayer;
////////////////////////////////////////
// Add 3D Citymodel (gLTF)//
//////////////////////////////////////// 
var addLayers = function () {
    if (CheckWebMap == 0) {
        if (Show2D) {
            //The layer to load if no active terrain
            dataLayer = new CitydbKmlLayer({
                url: './Data/Stuttgart_Ctg_NonEmbed/ctg_NonEmbed_collada_MasterJSON.json'
            });
        }
        if (Show3D) {
            //The layer to load if active terrain
            dataLayer = new CitydbKmlLayer({
                //url: './Data/Stuttgart_Ctg_NonEmbed/ctg_NonEmbed_collada_MasterJSON.json'
                // Fit well 3D!!
                //url: './Data/StuttgartOffset10Ctg/StuttgartOffset10Ctg_collada_MasterJSON.json'
                url: './Data/Export3DcityDB_CtgOff10/Export3DcityDB_CtgOff10_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset15Ctg/StuttgartOffset15Ctg_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset20Ctg/StuttgartOffset20Ctg_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset100Ctg/StuttgartOffset100Ctg_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset100Abs/StuttgartOffset100Abs_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset500Abs/StuttgartOffset500Abs_collada_MasterJSON.json'
                //url: './Data/StuttgartOffset1000Abs/StuttgartOffset1000Abs_collada_MasterJSON.json'
            });
        }
        //============== Uncomment for zoom to 3D City Position =========================
        Cesium.when(webMap.addLayer(dataLayer), function (loadedcitydbLayer) {
            //loadedcitydbLayer.zoomToStartPosition();
        });
        CheckWebMap = 1;
    }
    else {
        webMap.removeLayer(dataLayer.id);
        CheckWebMap = 0;
    }
};

////////////////////////////////////////
// Add 3D Citymodel (3D-Tiles)//
////////////////////////////////////////
var tileset;
var addLayers3DT = function () {
    CesiumStyleChoice.style.display = "block";
    try {
        tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
            url: './Data/3DTile_GTnew_31463',
            //url: './Data/Stuttgart_3dTile',
            //url: './Data/Stuttgart_3dTile_ClampToGround',
            //url: './Data/Stuttgart_3dTile_Geotoolbox_Texture',
            //url: './Data/Stuttgart_3dTile_Geotoolbox',
            //url: './Data/Stuttgart_3dTile_GTB_kdTree',
            maximumScreenSpaceError: 8 // default value
        }));
    }
    catch (err) {
        console.log('->  add 3DTiles failed!\n' + err);
    }
    //Adjust a tileset's height from the globe's surface.
    tileset.readyPromise.then(function () {
        var heightOffset = 55.0;
        var boundingSphere = tileset.boundingSphere;
        var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
        var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
        var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    });
    // Styling the Defalut style
    var transparentStyle = new Cesium.Cesium3DTileStyle({
        color: "color('WHITE', 1)",
        show: true
    });
    tileset.style = transparentStyle;
};

var transparentStyle = new Cesium.Cesium3DTileStyle({
    color: "color('WHITE', 1)",
    show: true
});
var blackStyle = new Cesium.Cesium3DTileStyle({
    color: "color('BLACK', 0.3)",
    show: true
});

var WhiteStyle = new Cesium.Cesium3DTileStyle({
    color: "color('WHITE', 0.7)",
    show: true
});
// Styling depend on the option
var tileStyle = document.getElementById('tileStyle');
function set3DTileStyle() {
    var selectedStyle = tileStyle.options[tileStyle.selectedIndex].value;
    if (selectedStyle === 'none') {
        tileset.style = transparentStyle;
    } else if (selectedStyle === 'black') {
        tileset.style = blackStyle;
    } else if (selectedStyle === 'white') {
        tileset.style = WhiteStyle;
    }
}
tileStyle.addEventListener('change', set3DTileStyle);
var TurnOff3DT = function () {
    tileset.show = false;
    CesiumStyleChoice.style.display = "none";
}
/////////////////////////////
// Load  a CZML file ///////
////////////////////////////
var ebikeBox = document.getElementById("ebikeInfo");
var ebikePeriod = document.getElementById('Period');
ebikePeriod.addEventListener('change', addEbikeSphere);
var ebike;
var TemperatureVal, TempVal, HeartrateVal, SpeedVal, DismVal, AltValu;
var addEbikeSphere = function () {
    ebikeBox.style.display = "block";
    var selectedPeriod = ebikePeriod.options[ebikePeriod.selectedIndex].value;
    if (selectedPeriod === 'Periodnon') {
        alert("please select period!");
    } else if (selectedPeriod === 'Period_22_11_17_01') {
        var ebikePromise = Cesium.CzmlDataSource.load('./Data/CZML/czml_11_22_2017_GPX_1.json');
        ebikePromise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var idTag = 'Garmin_11_22_2017_1';
            ebike = dataSource.entities.getById(idTag);
            var Tempid = 'Temperature' + idTag;
            var Hrid = 'Heartrate' + idTag;
            var spid = 'Speed' + idTag;
            var Dismid = 'DistanceM' + idTag;
            var Altid = 'Alt' + idTag;
            TemperatureVal = dataSource.entities.getById(Tempid);
            HeartrateVal = dataSource.entities.getById(Hrid);
            SpeedVal = dataSource.entities.getById(spid);
            DismVal = dataSource.entities.getById(Dismid);
            AltValu = dataSource.entities.getById(Altid);
            var myVar = setInterval(showInfo, 500);

        });
    } else if (selectedPeriod === 'Period_22_11_17_02') {
        var ebikePromise = Cesium.CzmlDataSource.load('./Data/CZML/czml_11_22_2017_GPX_2.json');
        ebikePromise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var idTag = 'Garmin_11_22_2017_2';
            ebike = dataSource.entities.getById(idTag);
            var Tempid = 'Temperature' + idTag;
            var Hrid = 'Heartrate' + idTag;
            var spid = 'Speed' + idTag;
            var Dismid = 'DistanceM' + idTag;
            var Altid = 'Alt' + idTag;
            TemperatureVal = dataSource.entities.getById(Tempid);
            HeartrateVal = dataSource.entities.getById(Hrid);
            SpeedVal = dataSource.entities.getById(spid);
            DismVal = dataSource.entities.getById(Dismid);
            AltValu = dataSource.entities.getById(Altid);
            var myVar = setInterval(showInfo, 500);

        });
    } else if (selectedPeriod === 'Period_24_11_17_01') {
        var ebikePromise = Cesium.CzmlDataSource.load('./Data/CZML/czml_11_24_2017_GPX_1.json');
        ebikePromise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var idTag = 'Garmin_11_24_2017_1';
            ebike = dataSource.entities.getById(idTag);
            var Tempid = 'Temperature' + idTag;
            var Hrid = 'Heartrate' + idTag;
            var spid = 'Speed' + idTag;
            var Dismid = 'DistanceM' + idTag;
            var Altid = 'Alt' + idTag;
            TemperatureVal = dataSource.entities.getById(Tempid);
            HeartrateVal = dataSource.entities.getById(Hrid);
            SpeedVal = dataSource.entities.getById(spid);
            DismVal = dataSource.entities.getById(Dismid);
            AltValu = dataSource.entities.getById(Altid);
            var myVar = setInterval(showInfo, 500);

        });
    } else if (selectedPeriod === 'Period_24_11_17_02') {
        var ebikePromise = Cesium.CzmlDataSource.load('./Data/CZML/czml_11_24_2017_GPX_2.json');
        ebikePromise.then(function (dataSource) {
            viewer.dataSources.add(dataSource);
            var idTag = 'Garmin_11_24_2017_2';
            ebike = dataSource.entities.getById(idTag);
            var Tempid = 'Temperature' + idTag;
            var Hrid = 'Heartrate' + idTag;
            var spid = 'Speed' + idTag;
            var Dismid = 'DistanceM' + idTag;
            var Altid = 'Alt' + idTag;
            TemperatureVal = dataSource.entities.getById(Tempid);
            HeartrateVal = dataSource.entities.getById(Hrid);
            SpeedVal = dataSource.entities.getById(spid);
            DismVal = dataSource.entities.getById(Dismid);
            AltValu = dataSource.entities.getById(Altid);
            var myVar = setInterval(showInfo, 500);

        });
    }

}
function RemoveEbike() {
    viewer.dataSources.removeAll();
    ebikeBox.style.display = "none";
    viewer.scene.camera.flyTo(homeCameraView);
};
function getTemp(time, result) {
    // Get the end position from the polyLine's callback.
    result = propertyValues.getValue(time);
    console.log('temp cb :' + result);
    return result;
}
function showInfo() {
    //Show time-related Body Temperature
    document.getElementById('temp').innerHTML = TemperatureVal.properties.TempValue.getValue(viewer.clock.currentTime).toFixed(2) + ' \u00B0';
    document.getElementById('Altv').innerHTML = 'Altitude : ' + AltValu.properties.AltVal.getValue(viewer.clock.currentTime).toFixed(2) + ' m';
    //Show time-related Hearrate
    document.getElementById('heartrate').innerHTML = HeartrateVal.properties.hrValue.getValue(viewer.clock.currentTime).toFixed(2);
    //Show time-related Location
    var cartographic = Cesium.Cartographic.fromCartesian(ebike.position.getValue(viewer.clock.currentTime));
    document.getElementById('locaLat').innerHTML = 'Latitude : ' + Cesium.Math.toDegrees(cartographic.longitude).toFixed(5) + ' \u00B0';
    document.getElementById('locaLong').innerHTML = 'Longitude : ' + Cesium.Math.toDegrees(cartographic.latitude).toFixed(5) + ' \u00B0';
    document.getElementById('sp').innerHTML = SpeedVal.properties.spVal.getValue(viewer.clock.currentTime).toFixed(2) + ' km/h';
    document.getElementById('tdm').innerHTML = DismVal.properties.DmVal.getValue(viewer.clock.currentTime).toFixed(2) + ' m';
}


var removeLayers = function () {
    webMap.removeLayer(dataLayer.id);
    viewer.trackedEntity = undefined;
    viewer.scene.camera.flyTo(homeCameraView);
};

//////////////////////////////////////////////////////////////////////////
// Setup Camera Modes
//////////////////////////////////////////////////////////////////////////

var freeModeElement = document.getElementById('freeMode');
var ebikeFarMode = document.getElementById('ebikeMode');

// Create a follow camera by tracking the drone entity
function setViewMode() {
    if (ebikeFarMode.checked) {
        ebike.viewFrom = new Cesium.Cartesian3(-450, -450, 500);
        viewer.trackedEntity = ebike;
    } else if (freeModeElement.checked) {
        viewer.trackedEntity = undefined;
        viewer.scene.camera.flyTo(homeCameraView);
    } else {
        viewer.trackedEntity = undefined;
        viewer.scene.camera.flyTo(homeCameraView);
    }
}

freeModeElement.addEventListener('change', setViewMode);
ebikeFarMode.addEventListener('change', setViewMode);

viewer.trackedEntityChanged.addEventListener(function () {
    if (viewer.trackedEntity === ebike) {
        freeModeElement.checked = false;
        ebikeFarMode.checked = true;
    }
});


//////////////////////////////////
// A Function to fly Somewhere////
//////////////////////////////////
var ToStutt = function () {
    viewer.camera.flyTo({
        destination: initialPosition,
        orientation: {
            heading: initialOrientation.heading,
            pitch: initialOrientation.pitch,
            roll: initialOrientation.roll
        }
    });
};


