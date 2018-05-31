var handler= new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
var showpo = false;
// a function to get the click location
var getLocationFrom = false;
var getLocationTo = false;
var getLocaFrom = function() {
    getLocationFrom = true;
}
var getLocaTo = function() {
    getLocationTo = true;
}


handler.setInputAction(function (click) {
        var pickedObject = viewer.scene.pick(click.position);
        var cartesian = viewer.scene.pickPosition(click.position);
        if (viewer.scene.pickPositionSupported && Cesium.defined(cartesian) &&getLocationFrom) {
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var longitude = Cesium.Math.toDegrees(cartographic.longitude);
            var latitude = Cesium.Math.toDegrees(cartographic.latitude);
            var altitude = cartographic.height;
            document.getElementById('RouteFromLong').value = longitude
            document.getElementById('RouteFromLat').value = latitude
            getLocationFrom = false;
        }
        else if (viewer.scene.pickPositionSupported && Cesium.defined(cartesian) &&getLocationTo) {
            var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
            var longitude = Cesium.Math.toDegrees(cartographic.longitude);
            var latitude = Cesium.Math.toDegrees(cartographic.latitude);
            var altitude = cartographic.height;
            document.getElementById('RouteToLong').value = longitude
            document.getElementById('RouteToLat').value = latitude
            getLocationTo = false;
        }
    }, Cesium.ScreenSpaceEventType.RIGHT_CLICK);






    //function to show mouse move on Location
    var entity = viewer.entities.add({
            label : {
                show : false,
                showBackground : true,
                font : '14px monospace',
                horizontalOrigin : Cesium.HorizontalOrigin.LEFT,
                verticalOrigin : Cesium.VerticalOrigin.TOP,
                pixelOffset : new Cesium.Cartesian2(15, 0)
            }
        });
        // Mouse over the globe to see the cartographic position
        handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
        handler.setInputAction(function(movement) {
            var cartesian = viewer.camera.pickEllipsoid(movement.endPosition, viewer.scene.globe.ellipsoid);
            if (cartesian && showpo) {
                var cartographic = Cesium.Cartographic.fromCartesian(cartesian);
                var longitudeString = Cesium.Math.toDegrees(cartographic.longitude);
                var latitudeString = Cesium.Math.toDegrees(cartographic.latitude);
        
                entity.position = cartesian;
                entity.label.show = true;
                entity.label.text =
                'Lat: ' + ('   ' + latitudeString) + '\u00B0'+   
                '\nLon: ' + ('   ' + longitudeString) + '\u00B0' ; 
                    
            } else {
                entity.label.show = false;
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

        var openShowLo = function (){
            
            if (!showpo) {
                showpo = true;
            } else if (showpo) {
                showpo = false;
            }
        }
