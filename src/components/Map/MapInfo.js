import { useNavigate } from 'react-router-dom';
import * as C from '@chakra-ui/react';
import MapResearch from './MapResearch';

export default function MapInfo({
  currentMarker,
  categoryMarkers,
  visible,
  moveCenter,
  mapRef,
  verifyPlace,
  setCategoryMarkers,
}) {
  const navigate = useNavigate();

  return (
    <C.Grid
      position="absolute"
      width="calc(100% - 40px)"
      left="20px !important"
      right="20px"
      bottom="20px"
      zIndex={1}
      justifyItems="center"
      onClick={() => {
        console.log(currentMarker.place_name);
        navigate(`/storeInfo${currentMarker.place_name}`);
      }}
    >
      {/* category select -> marker click -> move map center */}
      {categoryMarkers && moveCenter && (
        <MapResearch
          currentMarker={currentMarker}
          verifyPlace={verifyPlace}
          mapRef={mapRef}
          setCategoryMarkers={setCategoryMarkers}
        />
      )}

      <C.Flex
        w="100%"
        h="180px"
        bgColor="white"
        border="1px solid #d3d3d3"
        borderRadius="3px"
        padding="15px 15px"
        mt="20px"
      >
        <C.Image
          flex="2"
          src={currentMarker.place_url}
          boxSize="140px"
          minW="120px"
          maxW="120px"
          h="130px"
          borderRadius="3px"
          marginRight="20px"
        />
        <C.Box flex="3" h="100%" textAlign="left">
          <C.Box fontSize="15px" fontWeight="600" mt="5px">
            {currentMarker.place_name}
          </C.Box>
          <C.Box fontSize="14px" color="#392f31" mt="5px">
            {currentMarker.address}
          </C.Box>
          <C.Box fontSize="13px" color="#808080" mt="5px">
            {currentMarker.category_name}
          </C.Box>
        </C.Box>
      </C.Flex>
    </C.Grid>
  );
}
