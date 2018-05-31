var viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayerPicker: true,
            scene3DOnly: true,
            navigationHelpButton: false,
            selectionIndicator: false
    });
    viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
            url: 'https://assets.agi.com/stk-terrain/world',
            requestWaterMask: true, // required for water effects
            requestVertexNormals: false // required for terrain lighting
        });
    
    var greenCylinder = viewer.entities.add({
        name : 'Green cylinder with black outline',
        position: Cesium.Cartesian3.fromDegrees(9.1720, 48.7630, 335.3987104786474 +20),
        cylinder : {
            length : 40.0,
            topRadius : 2.0,
            bottomRadius : 2.0,
            material : Cesium.Color.GREEN.withAlpha(0.5)
            //outline : true
            //outlineColor : Cesium.Color.DARK_GREEN
        }
    });
    viewer.zoomTo(viewer.entities);
    