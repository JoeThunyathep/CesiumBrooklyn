//////////////////////////////////
// A Function to trigger the menu////
//////////////////////////////////
var openRTEI = function() {
    if (RTEI.style.display === 'none') {
        RTEI.style.display = "block";
        HEU.style.display = "none";
        DCMO.style.display = "none";
        MapP.style.display = "none";
        CamMe.style.display = "none";
    } else {
        RTEI.style.display = "none";
    }
    
}
var openHEU = function() {
    if (HEU.style.display === 'none') {
        HEU.style.display = "block";
        RTEI.style.display = "none";
        DCMO.style.display = "none";
        MapP.style.display = "none";
        CamMe.style.display = "none";
    } else {
        HEU.style.display = "none";
    }
}
var openStat = function() {
    if (CamMe.style.display === 'none') {
        CamMe.style.display = "block";
        RTEI.style.display = "none";
        DCMO.style.display = "none";
        MapP.style.display = "none";
        HEU.style.display = "none";
    } else {
        CamMe.style.display = "none";
    }
}
var open3DCMO = function() {
    if (DCMO.style.display === 'none') {
        DCMO.style.display = "block";
        RTEI.style.display = "none";
        CamMe.style.display = "none";
        MapP.style.display = "none";
        HEU.style.display = "none";
    } else {
        DCMO.style.display = "none";
    }
}
var openMapP = function() {
    if (MapP.style.display === 'none') {
        MapP.style.display = "block";
        DCMO.style.display = "none";
        RTEI.style.display = "none";
        HEU.style.display = "none";
        CamMe.style.display = "none";
    } else {
        MapP.style.display = "none";
    }
}

// var openRouting = function() {
//     if (MapP.style.display === 'none') {
//         MapP.style.display = "block";
//         DCMO.style.display = "none";
//         RTEI.style.display = "none";
//         HEU.style.display = "none";
//         CamMe.style.display = "none";
//     } else {
//         MapP.style.display = "none";
//     }
// }