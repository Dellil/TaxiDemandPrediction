/**
 * NAVER MAP API
 */
// const map1 = new naver.maps.Map('map', {
//     zoom : 9
// });
// const mapProjection = naver.maps.TransCoord;

/**
 * EXPERIMENT
 */
// let p1 = mapProjection.fromLatLngToNaver();
// let p2 = mapProjection.fromLatLngToNaver();
// console.log("p1 POINT 값 : " + p1.x, p1.y);
// console.log("p2 POINT 값 : " + p2.x, p2.y);

// let p1 = mapProjection.fromLatLngToUTMK(new naver.maps.LatLng(37.72, 126.75));
// let p2 = mapProjection.fromLatLngToUTMK(new naver.maps.LatLng(37.42, 127.2));
// console.log(p1, p2)
// let pb = new naver.maps.PointBounds(p1, p2)

// let r1 = new naver.maps.Rectangle({
//     map : map1,
//     bounds : pb,
//     fillColor : "#0062ff",
//     fillOpacity : 0.5
// });

// new naver.maps.Rectangle({
//     map : map1,
//     bounds : { north : 37.72, east : 127.2, south : 37.42, west : 126.75},
//     fillColor : "#0062ff",
//     fillOpacity : 0.5
// });



/**
 * EVENTS
 */
//let event1 = naver.maps.Event.addListener(map1, "click", function(e){
    // let coordinateArray = CalculateRectangleCoordinate(xCount(e.coord.x), yCount(e.coord.y));
    // console.log("남서 -> " + coordinateArray[3] + " " + coordinateArray[0]);
    // console.log("북동 -> " + coordinateArray[2] + " " + coordinateArray[1]);
    // let rectangle = new naver.maps.Rectangle({
    //     map : map,
    //     bounds : new naver.maps.LatLngBounds(
    //         /*
    //          * 남서쪽, 북동쪽, 위-경도
    //          */
    //         new naver.maps.LatLng(coordinateArray[3], coordinateArray[0]),
    //         new naver.maps.LatLng(coordinateArray[2], coordinateArray[1])
    //     ),
    //     strokeWeight:0,
    //     strokeOpacity:0,
    //     fillColor : "#0062ff",
    //     fillOpacity : 0.5
    // });
//});



/**
 * SHAPES
 * 
 */
// new naver.maps.Rectangle({
//     map : map,
//     bounds : { north : 37.72, east : 127.2, south : 37.42, west : 126.75},
//     fillColor : "#0062ff",
//     fillOpacity : 0.5
// });

// new naver.maps.Rectangle({
//     map : map,
//     bounds : { north : 37.72, east : 127.2, south : 37.716, west : 126.75},
//     fillColor : "#0062ff",
//     fillOpacity : 0.5
// });

// var marker = new naver.maps.Marker({
//     position: new naver.maps.LatLng(37.72, 126.75),
//     map: map
// });

// var marker2 = new naver.maps.Marker({
//     position: new naver.maps.LatLng(127.2, 37.716),
//     map: map
// });


/**
 * UTIL THAT COUNT AND CALCULATE COORDINATES.
 */
// function xCount(xCoordinate){
//     const originalCoordinate = 126.75;
//     const part = xCoordinate-originalCoordinate;
//     const xCnt = Math.ceil(part/0.006)
//     return xCnt;
// }

// function yCount(yCoordinate){
//     const originalCoordinate = 37.72;
//     const part = originalCoordinate-yCoordinate;
//     const yCnt = Math.ceil(part/0.004)
//     return yCnt;
// }

// function CalculateRectangleCoordinate(xCnt, yCnt) {
    // 계산을 덜 할 수 있도록 고칠 수 있음..?
    // WEST
    // const x1 = 126.75+(xCnt-1)*0.006;
    // // EAST
    // const x2 = 126.75+xCnt*0.006;
    // // NORTH
    // const y1 = 37.72-(yCnt-1)*0.004;
    // // SOUTH
    // const y2 = 37.72-yCnt*0.004;
    // return [x1, x2, y1, y2];
// }

// function toFixedCalculate(value) {
//     return value.toFixed(5);
// }
