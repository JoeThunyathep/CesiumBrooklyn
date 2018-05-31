
var positions = [
    Cesium.Cartographic.fromDegrees(9.17797071, 48.781483),
    Cesium.Cartographic.fromDegrees(9.17832323, 48.78134807),
    Cesium.Cartographic.fromDegrees(9.1720, 48.7630)
];

////////////////////A Test to get Height////////////////////
// Query the terrain height of two Cartographic positions //
////////////////////////////////////////////////////////////
var terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'https://assets.agi.com/stk-terrain/v1/tilesets/world/tiles'
});

var promise = Cesium.sampleTerrainMostDetailed(terrainProvider, positions);
Cesium.when(promise, function (updatedPositions) {
    // positions[0].height and positions[1].height have been updated.
    // updatedPositions is just a reference to positions.
    // console.log('Positions [0] height :' + positions[0].height);
    // console.log('Positions [1] height :' + positions[1].height);
    // console.log('Positions [2] height :' + positions[2].height);
});
