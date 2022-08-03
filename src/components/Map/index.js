import React from 'react';
import { Map, Polygon } from 'react-kakao-maps-sdk';
import * as C from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs';
import MapCategory from './MapCategory';
import MapSearch from './MapSearch';
import MapMarker from './MapMarkers';
import MapInfo from './MapInfo';
import MapResearch from './MapResearch';
import apis from '../../apis/index.js';

export default function MyMap() {
  const mapRef = React.useRef();
  const [map, setMap] = React.useState();
  const [center, setCenter] = React.useState({
    lat: 34.85673539186446,
    lng: 128.6378763279313,
  });
  const [moveCenter, setMoveCenter] = React.useState(null);

  // 서비스에서 검증된 place 데이터
  const [verifyPlace, setVerifyPlace] = React.useState([]);
  // 검색한 키워드 문자열
  const [place, setPlace] = React.useState('');
  // 키워드로 검색한 데이터
  const [searchMarkers, setSearchMarkers] = React.useState([]);
  // 카테고리로 검색한 데이터
  const [categoryMarkers, setCategoryMarkers] = React.useState([]);
  // 클릭한 마커 데이터
  const [currentMarker, setCurrentMarker] = React.useState();
  // 마커 visible
  const [visible, setVisible] = React.useState('');
  // 폴리곤 path
  const [path, setPath] = React.useState([]);

  // page map 랜더링 시 db에서 서비스 검증된 place 가져옴
  React.useEffect(() => {
    let markers = [];
    apis.post('/api/place/get').then((res) => {
      res.data.forEach((data) => {
        markers.push({
          address: data.address,
          category_code: data.category_code,
          category_name: data.category_name,
          phone: data.phone,
          place_name: data.place_name,
          place_url: data.place_url,
          road_address: data.road_address,
          x: data.x,
          y: data.y,
        });
        setVerifyPlace(markers);
      });
    });
  }, []);

  return (
    <C.Flex flexDirection="column" w="100vw" h="100vh" fontFamily="cafe">
      <C.Box
        display="flex"
        alignItems="center"
        height="50px"
        padding="0px 20px"
      >
        <BsArrowLeft size={25} />
        {place ? (
          <C.Text fontSize={18} marginTop={21} marginLeft={10}>
            {place}
          </C.Text>
        ) : (
          <C.Text fontSize={18} marginTop={21} marginLeft={10}>
            전국전체
          </C.Text>
        )}
      </C.Box>
      <C.Box flex="1" padding="0px 20px">
        {/* 키워드 검색 */}
        <MapSearch
          map={map}
          place={place}
          setPlace={setPlace}
          searchMarkers={searchMarkers}
          setSearchMarkers={setSearchMarkers}
          path={path}
          verifyPlace={verifyPlace}
          setMoveCenter={setMoveCenter}
        />
        {/* 카테고리 검색 */}
        <MapCategory
          map={map}
          mapRef={mapRef}
          categoryMarkers={categoryMarkers}
          setCategoryMarkers={setCategoryMarkers}
          visible={visible}
          setVisible={setVisible}
          setCurrentMarker={setCurrentMarker}
          place={place}
          verifyPlace={verifyPlace}
          setMoveCenter={setMoveCenter}
        />
      </C.Box>
      <C.Box position="relative" flex="7" paddingTop="20">
        <Map
          center={center}
          level={9}
          style={{ width: '100%', height: '100%' }}
          onDragEnd={(map) => {
            setCenter({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            });
            setMoveCenter({
              lat: map.getCenter().getLat(),
              lng: map.getCenter().getLng(),
            });
          }}
          onClick={() => {
            setCurrentMarker(null);
            setMoveCenter(null);
            console.log(categoryMarkers);
          }}
          ref={mapRef}
          onCreate={setMap}
        >
          <>
            {visible === ''
              ? searchMarkers.map((marker, i) => (
                  <MapMarker
                    key={i}
                    marker={marker}
                    setCurrentMarker={setCurrentMarker}
                  />
                ))
              : categoryMarkers.map((marker, i) => (
                  <MapMarker
                    key={i}
                    marker={marker}
                    setCurrentMarker={setCurrentMarker}
                  />
                ))}
          </>
        </Map>

        {/* 카테고리 선택 -> 지도 옮겼을때 */}
        {categoryMarkers.length > 0 && moveCenter && (
          <C.Box
            position="absolute"
            width="calc(100% - 40px)"
            left="20px !important"
            right="20px"
            bottom="20px"
            zIndex={1}
            justifyItems="center"
          >
            <MapResearch
              mapRef={mapRef}
              verifyPlace={verifyPlace}
              currentMarker={currentMarker}
              categoryMarkers={categoryMarkers}
              setCategoryMarkers={setCategoryMarkers}
            />
          </C.Box>
        )}

        {/* 카테고리 선택 */}
        {currentMarker && (
          <MapInfo
            mapRef={mapRef}
            verifyPlace={verifyPlace}
            currentMarker={currentMarker}
            setCurrentMarker={setCurrentMarker}
            categoryMarkers={categoryMarkers}
            setCategoryMarkers={setCategoryMarkers}
            visible={visible}
            moveCenter={moveCenter}
          />
        )}
      </C.Box>
    </C.Flex>
  );
}
