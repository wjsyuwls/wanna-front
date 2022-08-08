/*global kakao */
import React from 'react';
import * as C from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import $ from 'jquery';
import geojson from './json/geo.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MapSearch({
  map,
  setPlace,
  setSearchMarkers,
  verifyPlace,
  setMoveCenter,
  setZoom,
}) {
  const [inputPlace, setInputPlace] = React.useState('');

  // 폴리곤 데이터 세팅
  const data = geojson.features;

  function searchPlaces() {
    const ps = new kakao.maps.services.Places();

    if (inputPlace) {
      ps.keywordSearch(inputPlace, placesSearchCB);
    }

    // 키워드 검색 완료 시 호출되는 콜백함수
    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        var bounds = new kakao.maps.LatLngBounds();

        let markers = [];
        data.forEach((search) => {
          const x = search.x;
          const y = search.y;

          bounds.extend(new kakao.maps.LatLng(search.y, search.x));

          // 카카오 api로 받아온 데이터에서 검증된 장소와 위도, 경도가 일치한 데이터 찾기
          const returnIndex = verifyPlace.findIndex((verify) => {
            return verify.x == x && verify.y == y;
          });

          if (verifyPlace[returnIndex] == null) {
            return;
          } else {
            markers.push(verifyPlace[returnIndex]);
          }
        });

        setSearchMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);

        // 검색하면 지도레벨 3으로 설정
        // setZoom(3);

        // 지도 애니메이션 렉 버그 폴리곤 더 simply해야함
        // polygon();
      }
    }

    function polygon() {
      const displayArea = (coordinates) => {
        let path = [];
        coordinates[0].forEach((coordinate) => {
          path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
        });

        new kakao.maps.Polygon({
          map: map,
          path: path, // 그려질 다각형의 좌표 배열
          strokeWeight: 2, // 선의 두께
          strokeColor: '#FF00FF', // 선의 색깔
          strokeOpacity: 0.8, // 선의 불투명도
        });
      };

      // 좌표가 폴리곤의 내부에 있으면 ? TRUE : FALSE
      const inside = (coordinates) => {
        // console.log(map.getCenter());
        var x = map.getCenter().La;
        var y = map.getCenter().Ma;

        var inside = false;
        for (
          var i = 0, j = coordinates.length - 1;
          i < coordinates.length;
          j = i++
        ) {
          var xi = coordinates[i][0],
            yi = coordinates[i][1];
          var xj = coordinates[j][0],
            yj = coordinates[j][1];

          var intersect =
            yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
          if (intersect) inside = !inside;
        }

        return inside;
      };

      // 키워드로 검색한 결과로 세팅해준 state LatLng 좌표가 폴리곤의 내부에 있으면 보여주기
      data.filter(function (e) {
        if (e.geometry.type === 'Polygon') {
          // geometry.type이 Polygon이면
          e.geometry.coordinates.forEach((coordinates) => {
            if (inside(coordinates)) {
              displayArea(e.geometry.coordinates);
            }
          });
        } else if (e.geometry.type === 'MultiPolygon') {
          // geometry.type이 MultiPolygon이면
          e.geometry.coordinates.forEach((coordinates) => {
            if (inside(coordinates[0])) {
              displayArea(coordinates);
            }
          });
        }
      });
    }
  }

  return (
    <C.Box paddingTop="20px">
      <C.Input
        id="input"
        placeholder="키워드를 입력하세요"
        width="85%"
        height="40px"
        border="1px solid"
        borderRadius="20px"
        padding="10px"
        fontSize="16px"
        onChange={(e) => {
          setInputPlace(e.target.value);
        }}
      />
      <img
        src="/img/search.png"
        style={{ paddingLeft: '5px', width: '45px', height: '40px' }}
        size={25}
        onClick={() => {
          setPlace(inputPlace);
          searchPlaces();
          setMoveCenter(null);
          $('#input').val('');
        }}
      />
    </C.Box>
  );
}
