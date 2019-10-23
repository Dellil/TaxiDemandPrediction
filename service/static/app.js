/**
 * KAKAO MAPS API
 */
let container = document.getElementById("map");
let options = {
    center: new kakao.maps.LatLng(37.56686024046173, 126.9786409294764),
    level : 8
};

const map = new kakao.maps.Map(container, options);

let mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);


/**
 * ARRAY
 */
let arr = new Array();


/**
 * COLORS TO BE COLORED TO THE POLYGON.
 */
const COLORONE = "#5d5e54"; // 검정
const COLORTWO = "#bdffd6"; // 민트
const COLORTHREE = "#4aa1ff"; // 파랑
const COLORFOUR = "#642bff"; // 보라
const COLORFIVE = "#ff4a4a"; // 빨강


/**
 * LATITUDE, LONGITUDE
 */
let la = 37.72;
let lo = 126.75;


/**
 * GET DATAS USING AJAX
 */
function requestToPredict() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "/predict");
    xhr.onload = () => {
        if (xhr.status == 200) getDataAndDrawPolygon(xhr.responseText);
        else { console.log("으악 AJAX 요청 실패"); }
    }
    xhr.send();
}

function getDataAndDrawPolygon(jsonStringData) {
    predictedData = JSON.parse(jsonStringData);
    datas = predictedData.data;

    for (let i = 1; i < 76; i++) {
        for (let j = 1; j < 76; j++) {
            let colorValue = returnColorValue(datas[(j + (i - 1) * 75) - 1]);
            let polygon = new kakao.maps.Polygon({
                map: map,
                path: [
                    new kakao.maps.LatLng(la, lo),
                    new kakao.maps.LatLng(la - 0.004, lo),
                    new kakao.maps.LatLng(la - 0.004, lo + 0.006),
                    new kakao.maps.LatLng(la, lo + 0.006)
                ],
                strokeWeight : 1,
                strokeColor: colorValue,
                strokeOpacity: 0.5,
                fillColor: colorValue,
                fillOpacity: 0.5,
                zIndex: 3
            });
            arr.push(polygon);
            lo += 0.006;
        }
        lo = 126.75;
        la -= 0.004;
    }
    la = 37.72;
    lo = 126.75;
}

function returnColorValue(predictedValue) {
    switch (predictedValue) {
        case 1:
            return COLORONE;
        case 2:
            return COLORTWO;
        case 3:
            return COLORTHREE;
        case 4:
            return COLORFOUR;
        case 5:
            return COLORFIVE;
    }
}


/**
 * CODE EXECUTE
 */
requestToPredict();

setInterval(() => {
    let date = new Date();
    let beItFiveMinutes = date.getMinutes() % 5 == 0 && date.getSeconds() == 0 ? true : false;
    date = null;
    if(beItFiveMinutes){
        arr.forEach(element => {
            element.setMap(null);
        });
        arr = [];
        requestToPredict();
        arr.forEach(element => {
            element.setMap(map);
        });
    }
}, 1000);