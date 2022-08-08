/*global kakao */
import React from 'react';
import $ from 'jquery';
import * as C from '@chakra-ui/react';
import { BsFlag, BsHouse } from 'react-icons/bs';
import { MdOutlineFastfood, MdOutlineLocalCafe } from 'react-icons/md';

const categories = [
  {
    name: '관광',
    code: 'AT4',
  },
  {
    name: '숙소',
    code: 'AD5',
  },
  {
    name: '맛집',
    code: 'FD6',
  },
  {
    name: '카페',
    code: 'CE7',
  },
];

export default function MapHeader({
  mapRef,
  setCategoryMarkers,
  visible,
  setVisible,
  setCurrentMarker,
  place,
  verifyPlace,
  setMoveCenter,
  setCategoryCode,
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
      console.log(data);

      let markers = [];
      data.forEach((search) => {
        const x = search.x;
        const y = search.y;

        // 카카오 api로 받아온 데이터에서 위도, 경도가 일치한 데이터 찾기
        const returnIndex = verifyPlace.findIndex((verify) => {
          return verify.x == x && verify.y == y;
        });

        if (verifyPlace[returnIndex] == null) {
          return;
        } else {
          markers.push(verifyPlace[returnIndex]);
        }
      });
      setCategoryMarkers(markers);
    }
  }

  React.useEffect(() => {
    setCategoryMarkers([]);
    setVisible('');
    $('.button').css({
      color: '#d3d3d3',
      backgroundColor: '#ffffff',
      border: '1px solid #d3d3d3',
    });
  }, [place]);

  return (
    <C.Box flex="1" marginTop="20px">
      <C.VStack>
        <C.Flex id="category">
          {categories.map((category) => (
            <C.Button
              className="button"
              width={70}
              height={35}
              marginLeft={5}
              backgroundColor={'white'}
              borderRadius={3}
              color="#d3d3d3"
              border="1px solid #d3d3d3"
              key={category.code}
              onClick={(e) => {
                setCurrentMarker('');

                if (visible === category.code) {
                  setCategoryMarkers([]);
                  setVisible('');

                  $(e.target).css({
                    color: '#d3d3d3',
                    backgroundColor: '#ffffff',
                    border: '1px solid #d3d3d3',
                  });
                } else {
                  const map = mapRef.current;
                  searchPlaces(category.code, map);
                  setCategoryCode(category.code);
                  setVisible(category.code);
                  setMoveCenter(null);

                  $('.button').css({
                    color: '#d3d3d3',
                    backgroundColor: '#ffffff',
                    border: '1px solid #d3d3d3',
                  });

                  $(e.target).css({
                    color: '#FFFFFF',
                    backgroundColor: 'rgb(41, 96, 215)',
                    border: 'none',
                  });
                }
              }}
            >
              {category.code === 'AT4' ? (
                <BsFlag size={14} pointerEvents="none" />
              ) : category.code === 'AD5' ? (
                <BsHouse size={14} pointerEvents="none" />
              ) : category.code === 'FD6' ? (
                <MdOutlineFastfood size={14} pointerEvents="none" />
              ) : category.code === 'CE7' ? (
                <MdOutlineLocalCafe size={14} pointerEvents="none" />
              ) : null}
              <C.Text
                fontSize={14}
                marginTop={3}
                marginLeft={3}
                marginBottom={0}
                pointerEvents="none"
              >
                {category.name}
              </C.Text>
            </C.Button>
          ))}
        </C.Flex>
      </C.VStack>
    </C.Box>
  );
}
