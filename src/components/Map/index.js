import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const mapRef = useRef();
  const [map, setMap] = useState();
  const [center, setCenter] = useState({
    lat: 34.85673539186446,
    lng: 128.6378763279313,
  });
  const [moveCenter, setMoveCenter] = useState(null);
  const [zoom, setZoom] = useState(9);

  // verify place data
  const [verifyPlace, setVerifyPlace] = useState([]);
  // keyword search string
  const [place, setPlace] = useState('');
  // keyword search data
  const [searchMarkers, setSearchMarkers] = useState([]);
  // category seach data
  const [categoryMarkers, setCategoryMarkers] = useState([]);
  // category code
  const [categoryCode, setCategoryCode] = useState('');
  // onclick marker data
  const [currentMarker, setCurrentMarker] = useState();
  // marker visible
  const [visible, setVisible] = useState('');
  // polygon path now deactivation
  const [path, setPath] = useState([]);

  // page map landering -> verify place get from db
  useEffect(() => {
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
        mt="10px"
      >
        <img
          src="/img/back.png"
          style={{ width: '45px', height: '45px' }}
          onClick={() => {
            navigate(-1);
          }}
        />
        {place ? (
          <C.Text fontSize="20" marginTop={21} marginLeft={10}>
            {place}
          </C.Text>
        ) : (
          <C.Text fontSize="20" marginTop={21} marginLeft={10}>
            전국전체
          </C.Text>
        )}
      </C.Box>
      <C.Box flex="1" padding="0px 20px">
        {/* keyword search */}
        <MapSearch
          map={map}
          place={place}
          setPlace={setPlace}
          searchMarkers={searchMarkers}
          setSearchMarkers={setSearchMarkers}
          path={path}
          verifyPlace={verifyPlace}
          setMoveCenter={setMoveCenter}
          setZoom={setZoom}
        />
        {/* category search */}
        <MapCategory
          map={map}
          mapRef={mapRef}
          categoryMarkers={categoryMarkers}
          setCategoryMarkers={setCategoryMarkers}
          setCategoryCode={setCategoryCode}
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
          level={zoom}
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

        {/* category select -> map center move */}
        {categoryCode && moveCenter && (
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
              categoryCode={categoryCode}
            />
          </C.Box>
        )}

        {/* category select */}
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
