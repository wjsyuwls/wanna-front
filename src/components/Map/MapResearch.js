import * as C from '@chakra-ui/react';

export default function MapResearch({
  mapRef,
  verifyPlace,
  currentMarker,
  categoryMarkers,
  setCategoryMarkers,
}) {
  function searchPlaces(code, map) {
    // 장소 검색 객체를 생성
    const ps = new kakao.maps.services.Places(map);
    // 카테고리 검색을 요청
    ps.categorySearch(code, placesSearchCB, { useMapBounds: true });
  }

  // 장소검색이 완료됐을 때 호출되는 콜백함수
  function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
      let markers = [];
      data.forEach((search) => {
        const x = search.x;
        const y = search.y;

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
      console.log(markers);

      setCategoryMarkers(markers);
    }
  }

  return (
    <C.Button
      w="160px"
      h="45px"
      bgColor="white"
      border="1px solid #d3d3d3"
      borderRadius="50px"
      opacity="0.9"
      justifyItems="center"
      alignItems="center"
      color="rgb(41, 96, 215)"
      fontSize="15px"
      fontWeight="700"
      onClick={() => {
        const map = mapRef.current;

        if (categoryMarkers !== 'undefined') {
          if (currentMarker !== '') {
            if (currentMarker === null) {
              // 카테고리 선택 -> 마커 클릭 후 닫고 -> 지도 위치 옮겼을때
              searchPlaces(categoryMarkers[0].category_code, map);
            } else {
              // 카테고리 선택 -> 마커 클릭 -> 지도 위치 옮겼을때
              searchPlaces(currentMarker.category_code, map);
            }
          } else {
            // 카테고리 선택 -> 지도 옮겼을때
            searchPlaces(categoryMarkers[0].category_code, map);
          }
        }
      }}
    >
      이 위치로 재검색
    </C.Button>
  );
}
