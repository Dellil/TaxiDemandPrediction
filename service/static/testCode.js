// TEST CODE
let tr1 = new kakao.maps.Rectangle({
    map : map,
    bounds : new kakao.maps.LatLngBounds(
        new kakao.maps.LatLng(37.716000, 126.750000),
        new kakao.maps.LatLng(37.720000, 126.756000)
    ),
    fillColor : "#4d1d1a",
    fillOpacity : 0.5,
    strokeColor : "#4d1d1a",
    strokeOpacity : 0.5
})
let tr2 = new kakao.maps.Rectangle({
    map : map,
    bounds : new kakao.maps.LatLngBounds(
        new kakao.maps.LatLng(37.716000, 126.750000),
        new kakao.maps.LatLng(37.720000, 126.756000)
    ),
    fillColor : "#4e5e27",
    fillOpacity : 0.5,
    strokeColor : "#4e5e27",
    strokeOpacity : 0.5
})

// let r2 = new kakao.maps.Rectangle({
//     map : map,
//     bounds : new kakao.maps.LatLngBounds(
//         new kakao.maps.LatLng(37.42, 126.75),
//         new kakao.maps.LatLng(37.72, 127.2)
//     ),
//     fillColor : "#0062ff",
//     fillOpacity : 0.5,
//     strokeColor : "#0062ff",
//     strokeOpacity : 0.5
// });
// r2.setMap(map);

/**
 * CREATE RECTANGLE THAT TAKE 2 PARAMETERS 
 * ( LATITUDE -> NORTH POINT, LONGITUDE -> EAST POINT )
 */
function createRectangle(la, lo){
    return new kakao.maps.Rectangle({
        map : map,
        bounds : new kakao.maps.LatLngBounds(
            new kakao.maps.LatLng(la-0.004, lo),
            new kakao.maps.LatLng(la, lo+0.006)
        ),
        fillColor : "#ff6a00",
        fillOpacity : 0.5,
        strokeColor : "#ff3c00",
        strokeOpacity : 0.5,
        strokeWeight : 1
    });
}

/**
 * SMALL RECTANGLE
 */
// 좌상단
// let ll1 = new kakao.maps.LatLng(la, lo);
// 좌하단
// let ll2 = new kakao.maps.LatLng(la-0.004, lo);
// 우하단
// let ll3 = new kakao.maps.LatLng(la-0.004, lo+0.006);
// 우상단
// let ll4 = new kakao.maps.LatLng(la, lo+0.006);

// let rectanglePath = [ ll1, ll2, ll3, ll4 ];

// let p2 = new kakao.maps.Polygon({
//     map : map,
//     path : rectanglePath,
//     strokeColor : "#0062ff",
//     strokeOpacity : 0.5,
//     fillColor : "#0062ff",
//     fillOpacity : 0.5
// });

/**
 * TEST CODE THAT DRAWS A LOT OF RECTANGLES.
 */
// for(let i = 0; i < 75; i++){
//     for(let j = 0; j < 75; j++){
//         new kakao.maps.Polygon({
//             map : map,
//             path : [
//                 new kakao.maps.LatLng(la, lo),
//                 new kakao.maps.LatLng(la-0.004, lo),
//                 new kakao.maps.LatLng(la-0.004, lo+0.006),
//                 new kakao.maps.LatLng(la, lo+0.006)
//             ],
//             strokeColor : "#0062ff",
//             strokeOpacity : 0.5,
//             fillColor : "#0062ff",
//             fillOpacity : 0.5,
//             zIndex : 3
//         });
//         lo += 0.006;
//     }
//     lo = 126.75;
//     la -= 0.004;
// }

/**
 * BIG RECTANGLE
 */
// LeftUp(NorthWest)
let ll1 = new kakao.maps.LatLng(37.72, 126.75);
// LeftDown(SouthWest)
let ll2 = new kakao.maps.LatLng(37.42, 126.75);
// RightUp(NorthEast)
let ll3 = new kakao.maps.LatLng(37.42, 127.2);
// RightDown(SouthEast)
let ll4 = new kakao.maps.LatLng(37.72, 127.2);

// MERGE THEM INTO THE LIST.
let bigRectanglePath = [ ll1, ll2, ll3, ll4 ];

// let p1 = new kakao.maps.Polygon({
//     map : map,
//     path : bigRectanglePath,
//     strokeColor : "#450000",
//     strokeOpacity : 0.5,
//     fillColor : "#450000",
//     fillOpacity : 0.5
// })

/**
* BIG RECTANGLE
*/
// LeftUp(NorthWest)
let ll1 = new kakao.maps.LatLng(37.72, 126.75);
// LeftDown(SouthWest)
let ll2 = new kakao.maps.LatLng(37.42, 126.75);
// RightUp(NorthEast)
let ll3 = new kakao.maps.LatLng(37.42, 127.2);
// RightDown(SouthEast)
let ll4 = new kakao.maps.LatLng(37.72, 127.2);

// MERGE THEM INTO THE LIST.
let bigRectanglePath = [ ll1, ll2, ll3, ll4 ];

// let p1 = new kakao.maps.Polygon({
//     map : map,
//     path : bigRectanglePath,
//     strokeColor : "#450000",
//     strokeOpacity : 0.5,
//     fillColor : "#450000",
//     fillOpacity : 0.5
// })