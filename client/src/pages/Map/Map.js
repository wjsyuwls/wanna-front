/*eslint-disable*/
import { useState, useEffect } from 'react'
import $ from 'jquery';
import styles from './Map.module.css';

import geojson from './json/geo.json';

function Map() {
    const { kakao } = window;

    // 검색한 키워드 문자열
    const [place, setPlace] = useState('');
    // 키워드로 검색한 지도 중앙의 위도, 경도
    const [LatLng, setLatLng] = useState({ Lat: 37.566826, Lng: 126.9786567 });
    // 키워드로 검색한 지도의 확대 레벨
    const [level, setLevel] = useState(5);

    const mapHandle = () => {
        // 마커를 클릭하면 장소명을 표출할 인포윈도우
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(LatLng.Lat, LatLng.Lng), // 지도의 중심좌표
                level: level // 지도의 확대 레벨
            };

        // 지도를 생성  
        var map = new kakao.maps.Map(mapContainer, mapOption);

        return { infowindow, map };
    };

    useEffect(() => {
        mapHandle();
    }, [])

    // useEffect(() => {
    //     let markers = []; // 마커를 담을 배열입니다
    //     let currCategory; // 현재 선택된 카테고리를 가지고 있을 변수입니다

    //     const { infowindow } = mapHandle();
    //     const { map } = mapHandle();

    //     // 장소 검색 객체를 생성합니다
    //     var ps = new kakao.maps.services.Places(map);

    //     // 지도에 idle 이벤트를 등록합니다
    //     kakao.maps.event.addListener(map, 'idle', searchPlaces);

    //     // 각 카테고리에 클릭 이벤트를 등록합니다
    //     addCategoryClickEvent();

    //     // 카테고리 검색을 요청하는 함수입니다
    //     function searchPlaces() {
    //         if (!currCategory) {
    //             return;
    //         }

    //         // 인포윈도우를 숨깁니다 
    //         infowindow.close();

    //         // 지도에 표시되고 있는 마커를 제거합니다
    //         removeMarker();

    //         ps.categorySearch(currCategory, placesSearchCB, { useMapBounds: true });
    //     };

    //     // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    //     function placesSearchCB(data, status, pagination) {
    //         console.log(data);
    //         if (status === kakao.maps.services.Status.OK) {
    //             // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
    //             displayPlaces(data);
    //         } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    //             // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

    //         } else if (status === kakao.maps.services.Status.ERROR) {
    //             // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요

    //         }
    //     };

    //     // 지도에 마커를 표출하는 함수입니다
    //     function displayPlaces(places) {
    //         // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
    //         // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
    //         var order = document.getElementById(currCategory).getAttribute('data-order');

    //         for (var i = 0; i < places.length; i++) {

    //             // 마커를 생성하고 지도에 표시합니다
    //             var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

    //             // 마커와 검색결과 항목을 클릭 했을 때
    //             // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
    //             (function (marker, place) {
    //                 kakao.maps.event.addListener(marker, 'click', function () {
    //                     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    //                     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
    //                     infowindow.open(map, marker);
    //                 });
    //             })(marker, places[i]);
    //         }
    //     };

    //     // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    //     function addMarker(position, order) {
    //         var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
    //             imageSize = new kakao.maps.Size(27, 28),  // 마커 이미지의 크기
    //             imgOptions = {
    //                 spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
    //                 spriteOrigin: new kakao.maps.Point(46, (order * 36)), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
    //                 offset: new kakao.maps.Point(11, 28) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
    //             },
    //             markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
    //             marker = new kakao.maps.Marker({
    //                 position: position, // 마커의 위치
    //                 image: markerImage
    //             });

    //         marker.setMap(map); // 지도 위에 마커를 표출합니다
    //         markers.push(marker);  // 배열에 생성된 마커를 추가합니다

    //         return marker;
    //     };

    //     // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    //     function removeMarker() {
    //         for (var i = 0; i < markers.length; i++) {
    //             markers[i].setMap(null);
    //         }
    //         markers = [];
    //     };

    //     // 각 카테고리에 클릭 이벤트를 등록합니다
    //     function addCategoryClickEvent() {
    //         var category = document.getElementById('category'),
    //             children = category.children;

    //         for (var i = 0; i < children.length; i++) {
    //             children[i].onclick = onClickCategory;
    //         }
    //     };

    //     // 카테고리를 클릭했을 때 호출되는 함수입니다
    //     function onClickCategory() {
    //         var id = this.id,
    //             className = this.className;

    //         infowindow.close();

    //         if (className === 'on') {
    //             currCategory = '';
    //             changeCategoryClass();
    //             removeMarker();
    //         } else {
    //             currCategory = id;
    //             changeCategoryClass(this);
    //             searchPlaces();
    //         }
    //     };

    //     // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
    //     function changeCategoryClass(el) {
    //         var category = document.getElementById('category'),
    //             children = category.children,
    //             i;

    //         for (i = 0; i < children.length; i++) {
    //             children[i].className = '';
    //         }

    //         if (el) {
    //             el.className = 'on';
    //         }
    //     };
    // }, [LatLng]);

    const search = () => {
        const { infowindow } = mapHandle();
        const { map } = mapHandle();

        let data = geojson.features;

        let coordinates = []; //좌표 저장 배열
        let polygons = [];

        const displayArea = (coordinates) => {
            let path = [];
            let points = [];

            coordinates[0].forEach((coordinate, i) => {
                let point = {};
                point.x = coordinate[1];
                point.y = coordinate[0];
                points.push(point);
                path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
            });

            let polygon = new kakao.maps.Polygon({
                map: map,
                path: path, // 그려질 다각형의 좌표 배열
                strokeWeight: 2, // 선의 두께
                strokeColor: '#FF00FF', // 선의 색깔
                strokeOpacity: 0.8, // 선의 불투명도
            });

            polygons.push(polygon);
        };

        data.forEach((val, i) => {
            console.log(val);
            type = val.geometry.type;
            coordinates = val.geometry.coordinates;
            name = val.properties.SIG_KOR_NM;

            // 키워드로 검색한 문자열과 json의 properties.SIG_KOR_NM가 2글자 이상 일치하면
            data.filter(function (e) {
                if (e.properties.SIG_KOR_NM === place) {
                    if (e.geometry.type === "Polygon") { // geometry.type이 Polygon이면
                        displayArea(coordinates);
                    } else {
                        coordinates.forEach((val) => { // geometry.type이 MultiPolygon이면
                            displayArea(val);
                        });
                    }
                }
            });
        });

        // 장소 검색 객체를 생성
        var ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색
        if (place) {
            ps.keywordSearch(place, placesSearchCB);
        }

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가
                var bounds = new kakao.maps.LatLngBounds();

                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정
                map.setBounds(bounds);

                setLatLng({ Lat: map.getCenter().Ma, Lng: map.getCenter().La });
                setLevel(map.getLevel());
            }
        };

        // 지도에 마커를 표시하는 함수
        function displayMarker(place) {
            // 마커를 생성하고 지도에 표시
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            // 마커에 클릭이벤트를 등록
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src='images/arrow-left.svg' />
                <div>거제도</div>
            </div>
            <div className={styles.nav}>
                <div className={styles.search}>
                    <input id='input' onChange={(e) => { setPlace(e.target.value); }} />
                    <img src='images/search.svg' onClick={() => {
                        search();
                        setPlace('');
                        $('#input').val('');
                    }} />
                </div>
                <ul id="category">
                    <li id="BK9" data-order="0">
                        <span className="category_bg bank"></span>
                        은행
                    </li>
                    <li id="MT1" data-order="1">
                        <span className="category_bg mart"></span>
                        마트
                    </li>
                    <li id="PM9" data-order="2">
                        <span className="category_bg pharmacy"></span>
                        약국
                    </li>
                    <li id="OL7" data-order="3">
                        <span className="category_bg oil"></span>
                        주유소
                    </li>
                    <li id="CE7" data-order="4">
                        <span className="category_bg cafe"></span>
                        카페
                    </li>
                    <li id="CS2" data-order="5">
                        <span className="category_bg store"></span>
                        편의점
                    </li>
                </ul>
            </div>
            <div className={styles.section}>
                <div id='map' style={{ width: '100%', height: '100%' }}>

                </div>
            </div>
        </div>
    );
};

export default Map;